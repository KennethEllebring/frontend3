import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Newblog = () => {
  const [title, setTitle] = useState("");
  const getDate = new Date();
  const year = getDate.getFullYear();
  const month = getDate.getMonth() + 1;
  const day = getDate.getDate();
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Kenneth");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, year, month, day, body, author};

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog added");
      setIsPending(false);
      navigate("/allblogs");
    });
  };

  return (
    <div className="create-wrapper">
      <h2 className="addblog">Add a New Blog</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input className="blogtitle" placeholder="Max 32 characters" maxLength="32" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Blog:</label>
        <textarea className="blogbody" required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

        <label>Author:</label>
        <select className="blogauthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Kenneth">Kenneth</option>
          <option value="Catta">Catta</option>
          <option value="Lucas">Lucas</option>
          <option value="Emil">Emil</option>
          <option value="Alex">Alex</option>
          <option value="Noel">Noel</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}

        <div className="create-preview">
          <p>Preview:</p>
          <h2>{title}</h2>
          <p>Written by: {author}</p>
          <em>
            {year} - {month} - {day}
          </em>
          <p className="bodypreview">{body}</p>
        </div>
      </form>
    </div>
  );
};

export default Newblog;
