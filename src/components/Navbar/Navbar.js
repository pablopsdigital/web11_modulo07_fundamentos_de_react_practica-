import './Navbar.css';
import Button from '../Button/Button';
import { useContext } from 'react';
import { ReactComponent as Brand } from '../../images/svg/brand.svg';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import { useState } from 'react';

function Navbar({ search, ...props }) {
  //Import authContext properties
  const { userIsLoggedState, handleLogout } = useContext(AuthContext);

  return (
    <nav className="navigation">
      <div className="menu-icon"></div>
      <ul className="navigation-list container">
        <li className="brand-container">
          <Link to="/">
            <Brand className="brand-img" alt="brand"></Brand>
          </Link>
        </li>
        <li>
          <NavLink exact to="/adverts" activeClassName="link-active">
            Adverts
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/adverts/new" activeClassName="link-active">
            New Advert
          </NavLink>
        </li>
        <li className="navigation-buttons">
          {userIsLoggedState ? (
            <Link to="/login" onClick={handleLogout}>
              <Button className="close-session-button">Log out</Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button className="login-button">Login</Button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
