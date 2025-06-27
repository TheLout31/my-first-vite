import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch";
import AutoCorrect from "./components/AutoCorrect";
import ProfileCard from "./components/ProfileCard";
import DailyQuote from "./components/DailyQuote";
import StopWatch from "./components/StopWatch";
import { UserProvider } from "./context/UserContext";
 import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StopWatch />} />
      <Route path="/dailyQuote" element={<DailyQuote />} />
      <Route path="/autoCorrect" element={<AutoCorrect />} />
    </Routes>
  );
}

export default App;
