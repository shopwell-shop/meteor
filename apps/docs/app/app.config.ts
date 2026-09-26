export default defineAppConfig({
  seo: {
    title: "Meteor Design System",
    description:
      "Meteor is Shopwell's open-source design system that drives our commerce solutions.",
  },
  navigation: {
    // Scope the docs sidebar to the current top-level section only.
    sub: "aside",
  },
  assistant: {
    floatingInput: false,
    explainWithAi: false,
  },
  header: {
    title: "Meteor Design System",
    logo: {
      light: "/shopwell-meteor-logo.svg",
      dark: "/shopwell-meteor-logo.svg",
      alt: "Shopwell Design",
      class: "h-7",
      favicon: "/shopwell-signet.svg",
      brandAssetsUrl: "https://brand.shopwell.cn",
    },
  },
  toc: {
    bottom: {
      title: "Useful resources",
      links: [
        {
          label: "Shopwell docs",
          to: "https://developer.shopwell.cn/",
          target: "_blank",
        },
        {
          label: "Admin SDK docs",
          to: "https://developer.shopwell.cn/resources/admin-extension-sdk/",
          target: "_blank",
        },
        {
          label: "Brand guidelines",
          to: "https://brand.shopwell.cn/",
          target: "_blank",
        },
      ],
    },
  },
  github: {
    url: "https://github.com/shopwell-shop/meteor",
    branch: "main",
    rootDir: "apps/docs",
  },
  storybook: {
    // Base URL of the deployed component-library Storybook. Component pages link
    // to their autodocs page here (see DocsPageHeaderLinks.vue).
    url: "https://storybook.meteor.shopwell.cn",
  },
  ui: {
    colors: {
      primary: "brand",
      secondary: "purple",
      success: "green",
      info: "blue",
      warning: "orange",
      error: "red",
      neutral: "zinc",
    },
    pageHeader: {
      slots: {
        root: "border-b-0 pb-0",
        headline: "hidden",
        description: "hidden",
      },
    },
    contentToc: {
      compoundVariants: [
        {
          active: true,
          class: {
            link: "text-[var(--color-text-primary-default)]",
          },
        },
      ],
      defaultVariants: {
        highlightVariant: "straight",
        highlightColor: "neutral",
      },
    },
  },
});
