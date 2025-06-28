import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Blogs.css";

const BlogsDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/posts/${id}`);
      const data = await res.json();
      setBlog(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  return (
    <div className="blogDetailContainer">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : blog ? (
        <div className="blogDetailCard">
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
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
        </div>
      ) : (
        <p className="loading">Blog not found.</p>
      )}
    </div>
  );
};

export default BlogsDetail;
