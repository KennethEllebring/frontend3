import linkedIn from "../assets/icons/LI-In-Bug.png";
import gitHub from "../assets/icons/GitHub-Mark-32px.png";
import gmail from "../assets/icons/Gmail_Logo_32px.png";
const Contact = () => {
  return (
    <section className="contact-wrapper">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-content">
        <p className="small-header">LinkedIn: </p>
        <div className="contact-link">
          <img src={linkedIn} alt="linkedIn bug" height="32px" />
          <a className="contact-link" href="https://www.linkedin.com/in/kenneth-ellebring-6919b6106/">
            Kenneth Ellebring
          </a>
          <img src={linkedIn} alt="linkedIn bug" height="32px" />
        </div>

        <p className="small-header">Github: </p>
        <div className="contact-link">
          <img src={gitHub} alt="github small mark" />
          <a className="contact-link" href="https://github.com/KennethEllebring">
            KennethEllebring
          </a>
          <img src={gitHub} alt="github small mark" />
        </div>

        <p className="small-header">E-mail:</p>
        <div className="contact-link">
          <img src={gmail} alt="gmail icon" height="32px" />
          <a className="contact-link" href="mailto:kenneth.ellebring@gmail.com">
            kenneth.ellebring@gmail.com
          </a>
          <img src={gmail} alt="gmail icon" height="32px" />
        </div>
        <p className="small-header">Phone:</p>
        <a className="contact-link" href="tel:+46708686426">
          +46708686426
        </a>
      </div>
    </section>
  );
};

export default Contact;
