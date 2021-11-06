import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import StorageManager from './utils/StorageManager';
import './index.css';
import { setAuthorizationHeader } from './services/ApiClient';

//Read data localStorage
const rememberme = StorageManager.getItem('rememberme');

let accessToken = null;
if (rememberme) {
  accessToken = StorageManager.getItem('token');
  //Config Header axios client
  setAuthorizationHeader(accessToken);
}

// const accessToken = StorageManager.getItem('token');
// setAuthorizationHeader(accessToken);

ReactDOM.render(
  <React.StrictMode>
    {/*Send info initial token in localStorage,*/}
    <App hasAccessToken={!!accessToken} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
