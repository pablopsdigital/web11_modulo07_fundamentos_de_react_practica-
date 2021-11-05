import "./App.css";
import React, { useState, Fragment } from "react";

import AdvertsPage from "../../pages/AdvertsPage/AdvertsPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { logout } from "../../pages/LoginPage/LoginPageService";

import AuthContextProvider from "../../contexts/authContext";

//Receives from index.js the information whether it has a token or not.
function App({ hasInitialToken, ...props }) {
  //Define state autentication state
  const [isLogged, setIsLogged] = useState(hasInitialToken);

  //Functions change states login and logout
  const handleLogin = () => {
    setIsLogged(true);
  };
  const handleLogout = () => {
    logout().then(() => setIsLogged(false));
  };

  //Send functions change state login and logout to buttons
  return (
    <AuthContextProvider>
      {isLogged ? (
        <AdvertsPage
          isLogged={isLogged}
          onLogout={handleLogout}
          title="Anuncios nuevos"
        />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </AuthContextProvider>
  );
}

export default App;
