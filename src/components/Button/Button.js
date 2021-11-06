import './Button.css';
import PropTypes from 'prop-types';

Button.propTypes = {
  disabled: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string
};

function Button({ disabled, onClick, type, className, ...props }) {
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
