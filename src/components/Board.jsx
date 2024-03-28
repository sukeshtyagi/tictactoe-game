import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [intialValues, setIntialValues] = useState(Array(9).fill("Enter"));
  const [isXTurn, setIsXTurn] = useState(true);
  const [error, setError] = useState(false);

  const handleClick = (index) => {
    if (intialValues[index] === "Enter") {
      setError(false);
      const copyInitialValues = [...intialValues];
      copyInitialValues[index] = isXTurn ? "X" : 0;
      setIntialValues(copyInitialValues);
      setIsXTurn(!isXTurn);
    } else {
      setError(true);
    }
  };

  const winner = () => {
    const winLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const item of winLogic) {
      const values = item.map((index) => intialValues[index]);
      if (values.every((value) => value !== "Enter" && value === values[0])) {
        if(values[0]==="X"){
          return "Player 1"
        }
        else{
          return "Player 2"
        }
      }
    }
    return false;
  };

  const checkDraw = () => {
    const allValuesEntered = intialValues.every((value) => value !== "Enter");
    if (allValuesEntered === true && isWinner === false) {
      return true;
    } else {
      return false;
    }
  };

  let isWinner = winner();

  let isDraw = checkDraw();

  return (
    <div className="boardContainer box-border w-1/2 h-3/5 bg-black mx-auto my-16  flex flex-col items-center">
      {isWinner ? (
        <div className="text-green-500 m-auto p-4 rounded-xl bg-gray-100">
          <p className="text-center text-3xl p-2">{isWinner} Wins</p>
          <p className="text-center text-xl p-2">Hope u enjoyed the game.</p>
          <p className="text-center text-3xl p-2">Thank You!!</p>
        </div>
      ) : isDraw ? (
        <div className="text-blue-500 m-auto p-4 rounded-xl bg-gray-100">
          <p className="text-center text-2xl pt-2">Match Drawn.</p>
          <p className="text-center text-3xl p-2">Thank You!!</p>
        </div>
      ) : (
        <>
          <div className="box-border w-10/12 h-10/12 mx-auto my-auto p-2">
            <div className="boardRow box-border w-full h-fit flex items-center justify-start border-t-2 border-x-4 rounded">
              <Square
                value={intialValues[0]}
                clickFunction={() => {
                  handleClick(0);
                }}
              />
              <Square
                value={intialValues[1]}
                clickFunction={() => {
                  handleClick(1);
                }}
              />
              <Square
                value={intialValues[2]}
                clickFunction={() => {
                  handleClick(2);
                }}
              />
            </div>
            <div className="boardRow box-border w-full h-fit bg-red-500 flex items-center justify-start border-x-4 rounded">
              <Square
                value={intialValues[3]}
                clickFunction={() => {
                  handleClick(3);
                }}
              />
              <Square
                value={intialValues[4]}
                clickFunction={() => {
                  handleClick(4);
                }}
              />
              <Square
                value={intialValues[5]}
                clickFunction={() => {
                  handleClick(5);
                }}
              />
            </div>
            <div className="boardRow box-border w-full h-fit bg-red-500 flex items-center justify-start border-b-4 border-x-4 rounded">
              <Square
                value={intialValues[6]}
                clickFunction={() => {
                  handleClick(6);
                }}
              />
              <Square
                value={intialValues[7]}
                clickFunction={() => {
                  handleClick(7);
                }}
              />
              <Square
                value={intialValues[8]}
                clickFunction={() => {
                  handleClick(8);
                }}
              />
            </div>
          </div>
          {error && (
            <p className="text-red-500 font-serif text-xl text-center pb-8">
              Cannot change a value once entered.
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Board;
