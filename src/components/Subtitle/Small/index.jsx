import "./styles.scss";

export default function SmallSubtitle({ children, styleClasses = "" }) {
  return <h2 className={`smallSubtitle ${styleClasses}`}>{children}</h2>;
}
