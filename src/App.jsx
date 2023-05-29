import PrimaryButton from "./components/Buttons/Primary";
import SmallHeading from "./components/Heading/Small";
import Paragraph from "./components/Paragraph";
import Shape from "./components/Shape";
import SmallSubtitle from "./components/Subtitle/Small";

function App() {
  return (
    <Shape styleClasses="shape-main">
      <SmallHeading styleClasses="small-heading-main">Heading SM</SmallHeading>
      <SmallSubtitle styleClasses="small-subtitle-main">
        Subtitle SM
      </SmallSubtitle>
      <Paragraph styleClasses="paragraph-main">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Paragraph>
      <PrimaryButton>Button Label</PrimaryButton>
    </Shape>
  );
}

export default App;
