import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const {id} = useParams();
  const {data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/allblogs");
    });
  };
  return (
    <div className="blogdetails-wrapper">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="blogdetails">
          <h2 className="blogtitle">{blog.title}</h2>
          <p className="blogauthor">Written by: {blog.author}</p>
          <div className="blogbody">{blog.body}</div>
          <button
            className="blogbutton"
            onClick={() => {
              window.confirm("Do you wish to delete this blog") && handleClick();
            }}>
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
