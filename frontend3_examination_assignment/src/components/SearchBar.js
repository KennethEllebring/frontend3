import TextField from "@mui/material/TextField";

const SearchBar = ({blogs, setSearchResults}) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(blogs);

    const resultsArray = blogs.filter((blog) => blog.title.toLowerCase().includes(e.target.value.toLowerCase()) || blog.body.toLowerCase().includes(e.target.value.toLowerCase()) || blog.author.toLowerCase().includes(e.target.value.toLowerCase()));

    setSearchResults(resultsArray);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField label="Search Blogs" id="outlined-size-small" size="normal" onChange={handleSearchChange} />
        <br />
        <br />
        <p className="or">or</p>
        <br />
        <label for="authors">Choose an Author: </label>
        <select id="authors" placeholder=" " name="authors" onChange={handleSearchChange}>
          <option value="">All</option>
          <option value="Kenneth">Kenneth</option>
          <option value="Catta">Catta</option>
          <option value="Lucas">Lucas</option>
          <option value="Alex">Alex</option>
          <option value="Emil">Emil</option>
          <option value="Noel">Noel</option>
        </select>
      </form>
    </>
  );
};

export default SearchBar;
