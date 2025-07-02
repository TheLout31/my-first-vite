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
import RefPrac from "./components/RefPrac";
import TodoList from "./components/TodoList";
import CollegeData from "./components/CollegeData";

function App() {
  function Navbar() {
    return (
      <nav className="navbar">
      <Link to="/" className="nav-link">StopWatch</Link>
      <Link to="/blogs" className="nav-link">Blogs</Link>
      <Link to="/ref" className="nav-link">Ref</Link>
      <Link to="/todoList" className="nav-link">Todo</Link>
       <Link to="/collegeData" className="nav-link">CollegeList</Link>
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
        <Route path="/ref" element={<RefPrac />} />
        <Route path="/todoList" element={<TodoList />} />
         <Route path="/collegeData" element={<CollegeData />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
