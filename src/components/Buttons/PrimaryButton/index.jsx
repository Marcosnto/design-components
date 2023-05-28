import "./styles.scss";

export default function PrimaryButton({ label, onClick, onBlur }) {
  return (
    <button
      type="button"
      className="primaryButton"
      onClick={onClick}
      onBlur={onBlur}
    >
      {label}
    </button>
  );
}
