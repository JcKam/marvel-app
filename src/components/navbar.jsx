import { Link } from "react-router-dom";
// CSS
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="list-style-none">
        <li>
          <Link to="/comics">Comics</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
