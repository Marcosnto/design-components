import PrimaryButton from "./index";

export default {
  title: "Components/Button",
  component: PrimaryButton,
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
    children: "Button Label",
  },
};

export const Primary = {};
