# Shopwell Service Permissions

This private SDK API is available to Shopwell Services through the `_private` namespace.

Both methods are supported by Shopwell `6.7.14.0` and newer. On older
Administrations, they throw an error without sending unsupported channel
messages.

## `grant()`

```ts
import { _private } from '@shopwell-ag/meteor-admin-sdk';

await _private.permissions.grant();
```

Grants the current Shopwell Services consent. The Administration resolves the current permissions revision and grants it through the platform service. The revision is intentionally not supplied by the service, so the grant scope stays platform-controlled.

This grants the **global Shopwell Services consent** (applies to all services), not a per-service grant.

## `isGranted()`

```ts
import { _private } from '@shopwell-ag/meteor-admin-sdk';

const granted = await _private.permissions.isGranted(): Promise<boolean>;
```

Resolves to `true` when the grant UI can stay hidden — i.e. consent for the latest revision is in place, or Shopwell Services are disabled. Resolves to `false` when Shopwell Services are enabled and the latest consent revision has not been granted yet. Combine with `_private.context.isService()` (render the banner when `isService() && !isGranted()`).
