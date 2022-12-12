import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Ken1 Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/create" className="newBlog">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
