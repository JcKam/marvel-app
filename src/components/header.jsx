import { Link } from "react-router-dom";

// CSS
import "./header.css";
import "./input.css";
import "./button.css";

const Header = () => {
  return (
    <header className="header" role="banner">
      <Link to="/">
        <h1>MARVEL</h1>
      </Link>
      <form role="search">
        <input className="input" type="search" aria-label="Recherche"></input>
      </form>

      <Link to="/login" className="button button-secondary">
        Login
      </Link>
    </header>
  );
};

export default Header;
