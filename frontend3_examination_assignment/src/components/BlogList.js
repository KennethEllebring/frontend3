import BlogPost from "./BlogPost";

const BlogList = ({searchResults}) => {
  const results = searchResults.map((blog) => <BlogPost key={blog.id} blog={blog} />);

  const content = results?.length ? (
    results
  ) : (
    <div className="noMatch-wrap">
      <p className="noMatch">No Matching Blogs!</p>
    </div>
  );

  return <div className="blog-wrapper">{content}</div>;
};

export default BlogList;
