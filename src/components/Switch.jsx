import React, { useState } from "react";

function Switch() {
  const [toggle, setToggle] = useState(false);

  function handleCLick() {
    setToggle(!toggle);
  }
  return (
    <>
      <button
        onClick={() => handleCLick()}
        style={{ backgroundColor: toggle ? "green" : "red" }}
      >
        {toggle ? "On" : "Off"}
      </button>
    </>
  );
}

export default Switch;
