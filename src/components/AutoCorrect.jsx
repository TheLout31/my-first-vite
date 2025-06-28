import React, { useState } from "react";

function AutoCorrect() {
  const [inputValue, setInputValue] = useState("");
  const corrections = {
    teh: "the",
    recieve: "receive",
    adress: "address",
    wierd: "weird",
    thier: "their",
  };
  let timer;
  const handleChange = (event) => {
    let value = event.target.value
    if (corrections.hasOwnProperty(value)) {
      setInputValue(corrections[value]);
    } else {
      setInputValue(value);
    }
  };

  return (
    <div style={{display:"flex", flex:1, flexDirection:'column',  }}>
      <label htmlFor="myInput">Enter Text:</label>
      <input
        type="text"
        id="myInput"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
}

export default AutoCorrect;
