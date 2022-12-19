import {Link} from "react-router-dom";

const HeaderNav = () => {
  return (
    <header className="header-wrapper">
      <h1 className="header">Warmory</h1>
      <Link to="/" className="link1">
        HOME
      </Link>
      <Link to="/Profiles" className="link2">
        PROFILES
      </Link>
      <Link to="/Search" className="link3">
        SEARCH
      </Link>
      <Link to="/contact" className="link4">
        CONTACT
      </Link>
    </header>
  );
};

export default HeaderNav;
