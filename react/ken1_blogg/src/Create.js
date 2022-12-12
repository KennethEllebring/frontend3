import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Kenneth");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author};

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Kenneth">Kenneth</option>
          <option value="Lucas">Lucas</option>
          <option value="Emil">Emil</option>
          <option value="Alex">Alex</option>
          <option value="Noel">Noel</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
        <br />
        <br />
        <div className="create-preview">
          <p>Preview:</p>
          <h2>{title}</h2>
          <p>Written by: {author}</p>
          <p>{body}</p>
        </div>
      </form>
    </div>
  );
};

export default Create;
