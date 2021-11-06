import './Navbar.css';
import Button from '../Button/Button';
import { useContext } from 'react';
import { ReactComponent as Brand } from '../../images/svg/brand.svg';
import { Link, NavLink } from 'react-router-dom';
// import SearchBox from '../../components/SearchBox/SearchBox';
import AuthContext from '../../contexts/AuthContext';

function Navbar({ ...props }) {
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

        <li className="search-container">{/* <SearchBox placeholder="Search advert..." /> */}</li>

        <li>
          <NavLink to="/adverts/new" activeClassName="link-active">
            New Advert
          </NavLink>
        </li>

        <li className="navigation-buttons">
          {userIsLoggedState ? (
            <Link to="/login">
              <Button className="close-session-button" onClick={handleLogout}>
                Log out
              </Button>
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
