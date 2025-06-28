import React, { useState, useEffect } from "react";
import "../styles/Blogs.css";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      setBlogs(data.posts);
      setFilteredBlogs(data.posts);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
 
      if (searchText.trim() == "") {
        setFilteredBlogs(blogs);
      } else {
        const filtered = blogs.filter((blogs) =>
          blogs.tags.includes(searchText.toLowerCase())
        );
        setFilteredBlogs(filtered);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [searchText, blogs]);

  const handleClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="main-Container">
      <div class="InputContainer">
        <input
          placeholder="Search.."
          id="input"
          class="input"
          value={searchText}
          onChange={handleChange}
        />
      </div>
      <div className="blogContainer">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          filteredBlogs.slice(0,7).map((blog) => (
            <div
              className="blogCard"
              key={blog.id}
              onClick={() => handleClick(blog.id)}
            >
              <h3>{blog.title}</h3>
              <p>{blog.body.slice(0, 100)}...</p>
              <div className="tags">
                {blog.tags.map((tag, index) => (
                  <span className="tag" key={index}>
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="blogMeta">
                <span>👤 User {blog.userId}</span>
                <span>👍 {blog.reactions.likes}</span>
                <span>👎 {blog.reactions.dislikes}</span>
                <span>👁️ {blog.views}</span>
              </div>
              <button className="readMoreBtn">Read More</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
