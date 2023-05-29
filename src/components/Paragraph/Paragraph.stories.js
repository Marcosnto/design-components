import Paragraph from "./index";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
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
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
  },
};

export const Default = {};
