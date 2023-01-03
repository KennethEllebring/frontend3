import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <ul>
          <li className="home1">
            <Link to="/about">
              <div className="background1">
                <p className="about">About</p>
              </div>
            </Link>
          </li>
          <li className="home2">
            <Link to="/projects">
              <div className="background2">
                <p className="projects">Projects</p>
              </div>
            </Link>
          </li>
          <li className="home3">
            <Link to="/allblogs">
              <div className="background3">
                <p className="blog">Blogs</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-wrapper">
        <div className="line"></div>
        <div className="info-wrapper">
          <p className="date">Nackademin 2022 - 2024</p>
          <Link className="footerlink" to="/Contact">
            Contact me
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
