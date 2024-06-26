import React, { useState, useEffect } from "react";

function Square({ value, clickFunction, isXTurn }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  let [restart, setRestart] = useState(false);

  restart = localStorage.getItem("restart");
  useEffect(() => {
    if (restart) {
      setIsClicked(false);
      localStorage.removeItem("restart");
    }
  }, [restart]);

  const handleHover = () => {
    if (isHovered && !isClicked && isXTurn) {
      return "X";
    }
    if (isHovered && !isClicked && !isXTurn) {
      return "O ";
    }
    return value;
  };

  return (
    <div
      className={`square box-border w-full h-full  ${
        isClicked ? "bg-purple-900 text-white " : "bg-green-500 text-black"
      }`}
      onClick={() => {
        clickFunction();
        setIsClicked(true);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h5
        className="entry box-border w-full h-20 text-xl font-bold  border-4 flex items-center justify-center  "
        style={{ userSelect: "none" }}
      >
        {handleHover()}
      </h5>
    </div>
  );
}

export default Square;
