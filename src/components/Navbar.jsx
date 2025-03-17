import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li><Link to="/">Om Mig</Link></li>
        <li><Link to="/skills">Kunskaper</Link></li>
        <li><Link to="/portfolio">Portfölj</Link></li>
        <li><Link to="/references">Referenser</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
