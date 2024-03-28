import React from "react";
import Board from "./Board";

function GamePage() {
  const playerOneName = localStorage.getItem("playerOneName");
  const playerTwoName = localStorage.getItem("playerTwoName");
  return (
    <div className="gameContainer box-border w-screen h-screen">
      <Board playerOneName={playerOneName} playerTwoName={playerTwoName} />
    </div>
  );
}

export default GamePage;
