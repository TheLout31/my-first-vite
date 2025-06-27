import React, { useContext, useEffect, useState } from "react";
import "../styles/DailyQuote.css";
import { themeContext } from "../context/ThemeContext";

const DailyQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useContext(themeContext);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/quotes");
      const data = await res.json();
      setQuotes(data.quotes);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function changeTheme() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  return loading ? (
    <div class="loader">
      <span class="loader-text">loading</span>
      <span class="load"></span>
    </div>
  ) : (
    <div
      class="container"
      style={{
        backgroundColor: theme == "dark" ? "#1f1f1f" : "white",
        color: theme == "dark" ? "white" : "#1f1f1f",
      }}
    >
      {quotes.slice(0, 6).map((item) => (
        <div key={item.id} class="card1">
          <p>{item.quote}</p>
          <p>{item.author}</p>
        </div>
      ))}
      <button onClick={changeTheme}> Switch to {theme === "dark" ? "Light" : "Dark"} Mode</button>
    </div>
  );
};

export default DailyQuote;
