import { Link } from "react-router-dom";
// CSS
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="list-style-none d-flex">
        <li className="navbar_item">
          <Link to="/comics" className="button button-primary">
            Comics
          </Link>
        </li>
        <li className="navbar_item">
          <Link to="/characters" className="button button-primary">
            Characters
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
