import bigpic from "./data/bigpic.jpg";

const cards = () => {
  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="header">
          <h2>Abstract Epicness</h2>
          <span className="bold">Awsome picture of blue waves i stole from Unsplash.com, </span>
          <span className="date">Dec 8, 2022</span>
        </div>
        <div className="card-content">
          <img src={bigpic} alt="abstract_picture" className="big-img" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, blanditiis distinctio! Quae assumenda odio adipisci, esse ratione ullam maxime, voluptate repudiandae aliquam, reiciendis dignissimos pariatur perspiciatis ex qui porro iste.</p>
        </div>
        <div className="buttons">
          <button className="like">&#128077; Like</button>
          <button className="replies">
            Replies <span className="button-counter">49</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default cards;
