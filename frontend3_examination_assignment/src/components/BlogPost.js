import {Link} from "react-router-dom";

const BlogPost = ({blog}) => {
  return (
    <>
      <Link className="blogLink" to={`/blogs/${blog.id}`}>
        <article className="blog">
          <h2 className="blogTitle">{blog.title}</h2>
          <p className="blogAuthor">Written by: {blog.author}</p>
          <em className="blogDate">
            {blog.year} - {blog.month} - {blog.day}
          </em>
          <p className="blogBody">{blog.body}</p>
        </article>
      </Link>
    </>
  );
};

export default BlogPost;
