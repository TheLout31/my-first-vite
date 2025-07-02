import React, { useEffect, useRef, useState } from "react";

const RefPrac = () => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleClick = () => {
    inputRef.current.focus();
    setFocused(!focused);
  };

  useEffect(() => {
    setFocused(!focused);
    inputRef.current.focus();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p>{focused ? "Focused!!" : "NotFocused!!"}</p>
      <input ref={inputRef} placeholder="search..." />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default RefPrac;
