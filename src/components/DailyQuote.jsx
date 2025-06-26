import React, { useEffect, useState } from "react";
import "../styles/DailyQuote.css";

const DailyQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return loading ? (
    <div class="loader">
      <span class="loader-text">loading</span>
      <span class="load"></span>
    </div>
  ) : (
    <div class="container">
      {quotes.slice(0, 6).map((item) => (
        <div key={item.id} class="card1">
          <p>{item.quote}</p>
          <p>{item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default DailyQuote;
