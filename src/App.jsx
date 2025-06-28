import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch";
import AutoCorrect from "./components/AutoCorrect";
import ProfileCard from "./components/ProfileCard";
import DailyQuote from "./components/DailyQuote";
import StopWatch from "./components/StopWatch";
import { UserProvider } from "./context/UserContext";
import { Routes, Route, Link } from "react-router-dom";
import Blogs from "./components/Blogs";
import BlogsDetail from "./components/BlogsDetail";

function App() {
  function Navbar() {
    return (
      <nav className="navbar">
      <Link to="/" className="nav-link">StopWatch</Link>
      <Link to="/blogs" className="nav-link">Blogs</Link>
    </nav>
    );
  }
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<StopWatch />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/blogs/:id" element={<BlogsDetail/>}/>
        <Route path="/autoCorrect" element={<AutoCorrect />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
