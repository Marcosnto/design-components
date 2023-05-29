import "./styles.scss";

export default function Shape({ children, styleClasses = "" }) {
  return <div className={`shape ${styleClasses}`}>{children}</div>;
}
