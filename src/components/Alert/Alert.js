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
    <div className="alert">
      <h1>alerta</h1>
      <p>{props.children}</p>
    </div>
  );
}

export default Alert;
