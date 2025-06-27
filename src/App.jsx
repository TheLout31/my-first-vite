import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch";
import AutoCorrect from "./components/AutoCorrect";
import ProfileCard from "./components/ProfileCard";
import DailyQuote from "./components/DailyQuote";
import StopWatch from "./components/StopWatch";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
 
    <div style={{padding:"10px"}}>
      
      <StopWatch/>
    </div>
  );
}

export default App;
