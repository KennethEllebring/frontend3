import {getBlogs} from "./api/axios";
import {useState, useEffect} from "react";

import BlogList from "./BlogList";
import SearchBar from "./SearchBar";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getBlogs()
      .then((json) => {
        setBlogs(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []);

  return (
    <>
      <div className="search-wrapper">
        <SearchBar blogs={blogs} setSearchResults={setSearchResults} />
      </div>
      <div className="allblogs-wrapper">
        <BlogList searchResults={searchResults} />
      </div>
    </>
  );
};

export default AllBlogs;
