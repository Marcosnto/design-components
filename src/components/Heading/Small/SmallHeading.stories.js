import SmallHeading from "./index";

export default {
  title: "Components/Heading",
  component: SmallHeading,
  argTypes: {
    children: {
      name: "Label",
    },
    styleClasses: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: "Heading SM",
  },
};

export const Small = {};
