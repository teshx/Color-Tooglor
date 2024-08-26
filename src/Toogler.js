import React from "react";
import { useState } from "react";

function Toogler() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setbuttonStyle] = useState("white");

  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setbuttonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }

  return (
    <>
      <section
        style={{ backgroundColor: backgroundColor, color: textColor }}
        className="content"
      >
        <button
          style={{
            buttonStyle,
            color: textColor,
            border: `2px solid ${textColor}`,
          }}
          onClick={handleClick}
        >
          {backgroundColor === "#1b1b1b"?"white Theme":"Black Theme"}
        </button>
        <h1>
          Welcome To A <br />
          Real World
        </h1>
      </section>
    </>
  );
}

export default Toogler;
