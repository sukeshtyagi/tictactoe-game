import React, { useState } from "react";
import Square from "./Square";
import { useNavigate } from "react-router-dom";

function Board({ playerOneName, playerTwoName }) {
  const [intialValues, setIntialValues] = useState(Array(9).fill("Enter"));
  const [isXTurn, setIsXTurn] = useState(true);
  const [error, setError] = useState(false);
  const [restart, setRestart] = useState(false);
  const navigate = useNavigate();

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
        if (values[0] === "X") {
          return playerOneName;
        } else {
          return playerTwoName;
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
    <div className="boardContainer box-border w-1/2 h-fit bg-black mx-auto flex-col items-center justify-center  p-2">
      <div className="details box-border w-1/2 bg-slate-100 flex flex-col items-center justify-center gap-2 mx-auto my-4 py-2">
        <p className="one box-border w-fit text-center text-black bg-green-400 p-2 flex justify-center gap-2 items-center">
          <span className="text-xl font-normal">{playerOneName}</span>{" "}
          <span>(X)</span>
        </p>
        <p className="two box-border w-fit text-center text-black bg-green-400 p-2 flex justify-center gap-2 items-center">
          <span className="text-xl font-normal">{playerTwoName}</span>{" "}
          <span>(O)</span>
        </p>
        <div className="buttonDiv  box-border w-full flex items-center justify-center gap-4">
          <button
            className="reset box-border bg-green-400 px-6 py-1 mt-2 rounded-xl text-lg text-center hover:ring-2 ring-offset-2 ring-blue-600"
            onClick={() => {
              navigate("/");
            }}
          >
            Reset
          </button>
          <button
            className="restart box-border bg-green-400 px-6 py-1 mt-2 rounded-xl text-lg text-center hover:ring-2 ring-offset-2 ring-blue-600"
            onClick={() => {
              setIntialValues(Array(9).fill("Enter"));
              setRestart(true);
            }}
          >
            Restart
          </button>
        </div>
      </div>
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
          <div className="box-border w-10/12 h-10/12 mx-auto mt-8 mb-4 p-2">
            <div className="boardRow box-border w-full h-fit flex items-center justify-start border-t-2 border-x-4 rounded">
              <Square
                value={intialValues[0]}
                clickFunction={() => {
                  handleClick(0);
                }}
                restart={restart}
                isXTurn={isXTurn}
              />
              <Square
                value={intialValues[1]}
                clickFunction={() => {
                  handleClick(1);
                }}
                restart={restart}
                isXTurn={isXTurn}
              />
              <Square
                value={intialValues[2]}
                clickFunction={() => {
                  handleClick(2);
                }}
                restart={restart}
                isXTurn={isXTurn}
              />
            </div>
            <div className="boardRow box-border w-full h-fit flex items-center justify-start border-x-4 rounded">
              <Square
                value={intialValues[3]}
                clickFunction={() => {
                  handleClick(3);
                }}
                restart={restart}
                isXTurn={isXTurn}
              />
              <Square
                value={intialValues[4]}
                clickFunction={() => {
                  handleClick(4);
                }}
                restart={restart}
                isXTurn={isXTurn}
              />
              <Square
                value={intialValues[5]}
                clickFunction={() => {
                  handleClick(5);
                }}
                restart={restart}
                isXTurn={isXTurn}
              />
            </div>
            <div className="boardRow box-border w-full h-fit flex items-center justify-start border-b-4 border-x-4 rounded">
              <Square
                value={intialValues[6]}
                clickFunction={() => {
                  handleClick(6);
                }}
                restart={restart}
                isXTurn={isXTurn}
              />
              <Square
                value={intialValues[7]}
                clickFunction={() => {
                  handleClick(7);
                }}
                restart={restart}
                isXTurn={isXTurn}
              />
              <Square
                value={intialValues[8]}
                clickFunction={() => {
                  handleClick(8);
                }}
                restart={restart}
                isXTurn={isXTurn}
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
