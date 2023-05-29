import Subtitle from "./index";

export default {
  title: "Components/Subtitle",
  component: Subtitle,
  argTypes: {
    children: {
      name: "Content",
    },
    styleClasses: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: "Subtitle SM",
  },
};

export const Small = {};
