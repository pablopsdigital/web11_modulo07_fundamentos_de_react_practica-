import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { login } from "./LoginPageService";
import "./LoginPage.css";

//Receives a props which is the function to change the login status in the app component.
function LoginPage({ onLogin, ...props }) {
  //State for inputs values
  const [inputsValuesState, setInputsValue] = useState({
    email: "",
    password: "",
    rememberme: false,
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
    const value = input.type === "checkbox" ? input.checked : input.value;
    const name = input.name;

    //From the previous state, only the affected values are overwritten.
    //Generate a dynamic key for the name of the value to be changed.
    setInputsValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    //State loading
    setIsLoading(true);

    //State error null
    setError();

    //Reset inputs
    //setInputsValue({ email: "", password: "" });

    //Init request API
    try {
      //Send email and pasword to header in axios client
      //Return a promise
      await login(inputsValuesState);
      setIsLoading(false);

      //Login app state funcions send in props
      onLogin();
    } catch (error) {
      //State Loading
      setIsLoading(false);
      //Change the null error status to the message
      setError(error);
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
          disabled={
            isLoading || !inputsValuesState.email || !inputsValuesState.password
          }
        >
          Iniciar sesión
        </Button>
      </form>

      {/*If loading*/}
      {isLoading && <div>cargando</div>}
      {/*If the error is caught then they are shown a message whit stateError */}
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
