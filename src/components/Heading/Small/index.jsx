import "./styles.scss";

export default function SmallHeading({ children, styleClasses = "" }) {
  return <h1 className={`small-heading ${styleClasses}`}>{children}</h1>;
}
