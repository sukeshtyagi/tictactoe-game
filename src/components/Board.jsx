import React from "react";
import Square from "./Square";

function Board({ intialValues }) {
  console.log(intialValues);
  return (
    <div className="boardContainer box-border w-1/2 h-1/2 bg-black mx-auto my-16  flex flex-col justify-start">
      <div className="box-border w-10/12 h-10/12 mx-auto my-auto">
        <div className="boardRow box-border w-full h-fit flex items-center justify-start border-t-2 border-x-4 ">
          <Square
            value={intialValues[0]}
            clickFunction={() => {
              console.log("clicked");
            }}
          />
          <Square value={intialValues[1]} />
          <Square value={intialValues[2]} />
        </div>
        <div className="boardRow box-border w-full h-fit bg-red-500 flex items-center justify-start border-x-4">
          <Square value={intialValues[3]} />
          <Square value={intialValues[4]} />
          <Square value={intialValues[5]} />
        </div>
        <div className="boardRow box-border w-full h-fit bg-red-500 flex items-center justify-start border-b-4 border-x-4">
          <Square value={intialValues[6]} />
          <Square value={intialValues[7]} />
          <Square value={intialValues[8]} />
        </div>
      </div>
    </div>
  );
}

export default Board;
