import './Alert.css';
import PropTypes from 'prop-types';

//Protypes
Alert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  color: PropTypes.string
};

Alert.defaultProps = {
  title: 'Alert',
  message: 'An error has occurred',
  color: 'gray'
};

function Alert({ ...props }) {
  return (
    <div onClick={props.onClick} className="alert">
      <p>{props.children}</p>
      <div className="close">X</div>
    </div>
  );
}

export default Alert;
