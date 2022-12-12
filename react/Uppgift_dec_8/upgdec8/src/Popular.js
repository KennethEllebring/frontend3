import denim from "./data/denim.jpg";
import sweater from "./data/sweater.jpg";
import workshop from "./data/workshop.jpg";
import trend from "./data/trend.jpg";

const popular = () => {
  return (
    <div className="popular-posts">
      <h3>Popular Posts</h3>
      <div className="post-preview">
        <img src={denim} alt="jeans_cloths" className="thumbnail" />
        <div className="popular-pre-wrap">
          <p className="header">Denim</p>
          <p className="info">sed mattis nunc</p>
        </div>
      </div>
      <div className="post-preview">
        <img src={sweater} alt="a_sweater" className="thumbnail" />
        <div className="popular-pre-wrap">
          <p className="header">Sweaters</p>
          <p className="info">Praes tinci sed</p>
        </div>
      </div>
      <div className="post-preview">
        <img src={workshop} alt="a_workshop" className="thumbnail" />
        <div className="popular-pre-wrap">
          <p className="header">Workshop</p>
          <p className="info">ultricies congue</p>
        </div>
      </div>
      <div className="post-preview">
        <img src={trend} alt="trendy_stuf" className="thumbnail" />
        <div className="popular-pre-wrap">
          <p className="header">Trends</p>
          <p className="info">Lorem ipsum dipsum</p>
        </div>
      </div>
    </div>
  );
};

export default popular;
