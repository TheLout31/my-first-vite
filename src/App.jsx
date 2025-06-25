import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch";
import AutoCorrect from "./components/AutoCorrect";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Switch />
      <AutoCorrect />
      <div style={{display:"flex", gap:10, justifyContent:"space-between"}}>
        <ProfileCard
          name="Imran Jaleel"
          age={23}
          bio="Imran is a passionate frontend developer who enjoys building clean and functional user interfaces. He specializes in React and mobile app development using React Native."
        />
        <ProfileCard
          name="Tushar"
          age={23}
          bio="Tushar is a passionate Data analyst who enjoys building clean and functional user interfaces."
        />
      </div>
    </>
  );
}

export default App;
