import meta from "./mt-promo-badge.stories";
import type { StoryObj } from "@storybook/vue3";

type MtPromoBadgeMeta = typeof meta;
type MtPromoBadgeStory = StoryObj<MtPromoBadgeMeta>;

export default {
  ...meta,
  title: "Components/Promo Badge/Interaction tests",
  tags: ["!autodocs"],
} as MtPromoBadgeMeta;

export const VisualTestNewVariant: MtPromoBadgeStory = {
  name: "Render new variant",
  args: {
    variant: "new",
  },
};

export const VisualTestBetaVariant: MtPromoBadgeStory = {
  name: "Render beta variant",
  args: {
    variant: "beta",
  },
};

export const VisualTestShopwellAIVariant: MtPromoBadgeStory = {
  name: "Render shopwell-ai variant",
  args: {
    variant: "shopwell-ai",
  },
};

export const VisualTestSmallSize: MtPromoBadgeStory = {
  name: "Render small size",
  args: {
    size: "s",
  },
};

export const VisualTestMediumSize: MtPromoBadgeStory = {
  name: "Render medium size",
  args: {
    size: "m",
  },
};

export const VisualTestLargeSize: MtPromoBadgeStory = {
  name: "Render large size",
  args: {
    size: "l",
  },
};
