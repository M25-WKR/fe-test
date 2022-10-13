import HuelLogo from "./HuelLogo";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__container u-container">
        <div className="Navbar__logo">
          <HuelLogo />
        </div>
        <ul className="Navbar__list">
          <li className="Navbar__list-item">
            <Link to="/">Overview</Link>
          </li>
          <li className="Navbar__list-item">
            <Link to="/task">Task</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
