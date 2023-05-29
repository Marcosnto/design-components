import CardContent from "./index";

export default {
  title: "Components/Card",
  component: CardContent,
  argTypes: {
    heading: {
      name: "Heading",
    },
    subTitle: {
      name: "Subtitle",
    },
    paragraphContent: {
      name: "Paragraph Content",
    },
    btnLabel: {
      name: "Button Label",
    },
  },
  args: {
    heading: "Heading SM",
    subTitle: "Subtitle SM",
    paragraphContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    btnLabel: "Button Label",
  },
};

export const Default = {};
