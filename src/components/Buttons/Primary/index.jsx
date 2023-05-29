import "./styles.scss";

export default function PrimaryButton({
  children,
  onClick,
  onBlur,
  styleClasses,
}) {
  return (
    <button
      type="button"
      className={`primary-button ${styleClasses}`}
      onClick={onClick}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
}
