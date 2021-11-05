import "./Button.css";

function Button(props) {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      className={props.className}
    >
      {props.children}
    </button>
  );
}

export default Button;
