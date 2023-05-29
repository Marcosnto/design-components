import "./styles.scss";

export default function Paragraph({ children, styleClasses = "" }) {
  return <p className={`paragraph ${styleClasses}`}>{children}</p>;
}
