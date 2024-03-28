import React from "react";

function Square({ value, clickFunction }) {
  return (
    <div
      className="square box-border w-full h-full bg-green-500 "
      onClick={clickFunction}
    >
      <h5
        className="entry box-border w-full h-20 text-xl font-bold text-black border-4 flex items-center justify-center"
        style={{ userSelect: "none" }}
      >
        {value}
      </h5>
    </div>
  );
}

export default Square;
