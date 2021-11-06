import React, { useState, useContext } from 'react';
import Button from '../../components/Button/Button';
import { login } from './LoginPageService';
import './LoginPage.css';
import Alert from '../../components/Alert/Alert';
import AuthContext from '../../contexts/AuthContext';

//Receives a props which is the function to change the login status in the app component.
function LoginPage({ history, location, ...props }) {
  const { handleLogin } = useContext(AuthContext);

  //State for inputs values
  const [inputsValuesState, setInputsValue] = useState({
    email: '',
    password: '',
    rememberme: false
  });

  //State for error control
  const [error, setError] = useState(null);
  const resetError = () => {
    setError(null);
  };

  //State loading
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    //Evaluate input type
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    const name = input.name;

    //From the previous state, only the affected values are overwritten.
    //Generate a dynamic key for the name of the value to be changed.
    setInputsValue((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true); //State loading
    setError(); //State error null

    //Init request API
    try {
      //Send email and pasword to header in axios client Return a promise
      await login(inputsValuesState);
      setIsLoading(false); //Login app state funcions send in props
      handleLogin();
      const { from } = location.state || { from: { pathname: '/' } }; //Create url redirect with history
      history.replace(from); //History router redirect override history navigator
    } catch (error) {
      setIsLoading(false); //State Loading
      setError(error); //Change the null error status to the message
    }
  };

  return (
    <div className="loginPage">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={inputsValuesState.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={inputsValuesState.password}
          onChange={handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="rememberme"
            checked={inputsValuesState.rememberme}
            onChange={handleChange}
          />
          Is going
        </label>
        <br />
        <Button
          type="submit"
          //Render condicional disabled
          disabled={isLoading || !inputsValuesState.email || !inputsValuesState.password}
        >
          Iniciar sesión
        </Button>
      </form>

      {/*If loading*/}
      {isLoading && <div>cargando</div>}
      {/*If the error is caught then they are shown a message whit stateError */}
      {error && (
        <Alert onClick={resetError} className="loginPage-error">
          {error.message}
        </Alert>
      )}
    </div>
  );
}

// const ConnectedLoginPage = (props) => (
//   <AuthContextConsummer>
//     {(auth) => <LoginPage onLogin={auth.handleLogin} {...props} />}
//   </AuthContextConsummer>
// );

export default LoginPage;
