import meta, { type MtAvatarMeta, type MtAvatarStory } from "./mt-avatar.stories";

export default {
  ...meta,
  title: "Components/Avatar/Interaction tests",
  tags: ["!autodocs"],
} satisfies MtAvatarMeta;

export const VisualTestRenderAvatar: MtAvatarStory = {
  name: "Render avatar",
  args: {
    name: "John Doe",
  },
};

export const VisualTestAvatarSquare: MtAvatarStory = {
  name: "Render avatar in square variant",
  args: {
    name: "John Doe",
    variant: "square",
  },
};

export const VisualTestAvatarImage: MtAvatarStory = {
  name: "Render avatar with image",
  args: {
    imageUrl: "/avatar.jpg",
  },
};

// The name lengths map onto the color list via `name length % 7`,
// so each story below actually renders the color it is named after.
export const VisualTestColorOrange: MtAvatarStory = {
  name: "Render avatar with orange color",
  args: {
    name: "Abigail",
  },
};

export const VisualTestColorPink: MtAvatarStory = {
  name: "Render avatar with pink color",
  args: {
    name: "A",
  },
};

export const VisualTestColorYellow: MtAvatarStory = {
  name: "Render avatar with yellow color",
  args: {
    name: "Jo",
  },
};

export const VisualTestColorPurple: MtAvatarStory = {
  name: "Render avatar with purple color",
  args: {
    name: "Joe",
  },
};

export const VisualTestColorRed: MtAvatarStory = {
  name: "Render avatar with red color",
  args: {
    name: "Jane",
  },
};

export const VisualTestColorBlue: MtAvatarStory = {
  name: "Render avatar with blue color",
  args: {
    name: "James",
  },
};

export const VisualTestColorGreen: MtAvatarStory = {
  name: "Render avatar with green color",
  args: {
    name: "Amanda",
  },
};
