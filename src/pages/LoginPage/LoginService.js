import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import ApiClient, {
  removeAuthorizationHeader,
  setAuthorizationHeader
} from '../../services/ApiClient';
import StorageManager from '../../utils/StorageManager';

export const login = (credentials) => {
  //Add credentials with username and password in axios headers
  return (
    ApiClient.post('/api/auth/login', credentials)
      //Save token return from API in localStorage whit StorageManager
      //after axios resolves the request
      .then(({ accessToken }) => {
        setAuthorizationHeader(accessToken);
        if (credentials.rememberme) {
          StorageManager.setItem('token', accessToken);
          StorageManager.setItem('rememberme', credentials.rememberme);
        }
      })
  );
};

export const logout = () =>
  Promise.resolve().then(() => {
    //Delete headers autentication axios and delete auth of localStorage
    removeAuthorizationHeader();
    StorageManager.clear();
  });
