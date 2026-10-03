import path from 'path';
import fs from 'fs';
import express, {
    type NextFunction,
    type Request as ExpressRequest,
    type Response as ExpressResponse,
} from 'express';
import {
    AppServer,
    InMemoryShopRepository,
    type Configuration,
} from '@shopwell-ag/app-server-sdk';
import { createServer as createViteServer } from 'vite';
import vue from '@vitejs/plugin-vue';

type RawBodyRequest = ExpressRequest & { rawBody?: string };

function rawRequestMiddleware(req: RawBodyRequest, _res: ExpressResponse, next: NextFunction) {
    const contentType = req.headers['content-type'] || '';

    if (contentType.split(';')[0] !== 'application/json') {
        next();
        return;
    }

    let data = '';
    req.setEncoding('utf8');
    req.on('data', (chunk: string) => {
        data += chunk;
    });
    req.on('end', () => {
        req.rawBody = data;
        next();
    });
}

function convertRequest(req: RawBodyRequest): Request {
    const headers = new Headers();

    Object.entries(req.headers).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((item) => headers.append(key, item));
        } else if (value !== undefined) {
            headers.set(key, value);
        }
    });

    const url = new URL(req.originalUrl, `${req.protocol}://${req.get('host')}`);
    const body = req.method === 'GET' || req.method === 'HEAD' ? undefined : req.rawBody || '';

    return new Request(url, {
        method: req.method,
        headers,
        body,
    });
}

async function convertResponse(response: Response, expressResponse: ExpressResponse) {
    expressResponse.status(response.status);
    response.headers.forEach((value, key) => expressResponse.setHeader(key, value));

    const body = await response.text();
    if (body.length === 0) {
        expressResponse.end();
        return;
    }

    expressResponse.send(body);
}

async function createServer() {
    const PORT = process.env.PORT || 8888;
    const URL = process.env.URL || `http://localhost:${PORT}`;

    const app = express();

    /**
     * Configure the app server for authentication and verification
     */
    const cfg: Configuration = {
        appName: 'MeteorAdminSDKApp',
        appSecret: 'testSecret',
        authorizeCallbackUrl: `${URL}/authorize/callback`
    };

    const appServer = new AppServer(cfg, new InMemoryShopRepository());

    app.use(rawRequestMiddleware);

    app.get('/authorize', async (req, res) => {
        const resp = await appServer.registration.authorize(convertRequest(req));
        await convertResponse(resp, res);
    });

    app.post('/authorize/callback', async (req, res) => {
        const resp = await appServer.registration.authorizeCallback(convertRequest(req));

        await convertResponse(resp, res);
    });

    /**
     * Create Vite server in middleware mode and configure the app type as
     * 'custom', disabling Vite's own HTML serving logic so parent server
     * can take control
     */
    const vite = await createViteServer({
        root: path.resolve(__dirname, 'frontend'),
        server: {
            middlewareMode: true,
            watch: {
                // During tests we edit the files too fast and sometimes chokidar
                // misses change events, so enforce polling for consistency
                usePolling: true,
                interval: 100,
            },
        },
        appType: 'custom',
        plugins: [vue()],
        optimizeDeps: {
            include: [
                '@shopwell-ag/meteor-admin-sdk',
                '@shopwell-ag/meteor-component-library'
            ]
        },
    })

    // use vite's connect instance as middleware
    app.use(vite.middlewares)

    app.use('*', async (req, res) => {
        const template = fs.readFileSync(
            path.resolve(__dirname, 'frontend/index.html'),
            'utf-8'
        );

        /**
         * Don't use hot-reload because this don't work correctly
         * within the Shopwell Admin
         */
        // const url = req.originalUrl
        // template = await vite.transformIndexHtml(url, template)

        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    })      

    app.listen(PORT, () => {
        console.log(`App listening at ${URL}`)
    })
}

void createServer();
