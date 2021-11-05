import "./Navbar.css";
import Button from "../Button/Button";
import { ReactComponent as Brand } from "../../images/svg/brand.svg";

function Navbar({ isLogged, onLogout, ...props }) {
  return (
    <nav className="navigation">
      <div className="menu-icon"></div>
      <ul className="navigation-list">
        <li className="brand-container">
          <Brand className="brand-img" alt="brand"></Brand>
        </li>
        <li className="search-container">Buscador</li>

        <li className="navigation-buttons">
          {!isLogged ? (
            <Button className="login-button">Login</Button>
          ) : (
            <Button className="close-session-button" onClick={onLogout}>
              Logout
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
