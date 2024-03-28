import React, { useState } from "react";

function Square({ value, clickFunction }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className={`square box-border w-full h-full  ${
        isClicked ? "bg-purple-900 text-white " : "bg-green-500 text-black"
      }`}
      onClick={() => {
        clickFunction();
        setIsClicked(true);
      }}
    >
      <h5
        className="entry box-border w-full h-20 text-xl font-bold  border-4 flex items-center justify-center  "
        style={{ userSelect: "none" }}
      >
        {value}
      </h5>
    </div>
  );
}

export default Square;
