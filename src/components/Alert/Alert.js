import './Alert.css';

function Alert(props) {
  return (
    <div className="alert">
      <h1>alerta</h1>
      <p>{props.children}</p>
    </div>
  );
}

export default Alert;
