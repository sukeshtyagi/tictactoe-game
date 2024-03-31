import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  const navigate = useNavigate();
  const [playerOneName, setPlayerOneName] = useState("Player 1");
  const [playerTwoName, setPlayerTwoName] = useState("Player 2");

  useEffect(() => {
    localStorage.setItem("playerOneName", playerOneName);
    localStorage.setItem("playerTwoName", playerTwoName);
  }, [playerOneName, playerTwoName]);

  return (
    <div className="outer box-border w-screen h-screen bg-black pt-2">
      <div className="details box-border w-3/4 sm:w-1/2 portrait:h-fit bg-white mx-auto mt-10 landscape:mt-0 landscape:h-10/12 p-4 rounded-xl flex flex-col items-start justify-evenly gap-10">
        <div className="playerOne box-border w-full h-2/6 bg-green-400 flex flex-col items-start border rounded-xl border-black px-2 gap-2">
          <label className="mt-1">Enter Player 1 Name</label>
          <input
            type="text"
            value={playerOneName}
            onChange={(e) => {
              setPlayerOneName(e.target.value);
            }}
            className="box-border w-2/3 pt-1 pb-1 px-4 mb-2 text-lg outline-none rounded-xl"
          />
        </div>

        <div className="playerTwo box-border w-full h-2/6 bg-green-400 flex flex-col items-start border rounded-xl border-black px-2 gap-2">
          <label className="mt-1">Enter Player 2 Name</label>
          <input
            type="text"
            value={playerTwoName}
            onChange={(e) => {
              setPlayerTwoName(e.target.value);
            }}
            className="box-border w-2/3 pt-1 pb-1 px-4 mb-2 text-lg outline-none rounded-xl"
          />
        </div>

        <button
          className="button box-border mx-auto text-black text-2xl font-normal border rounded-xl border-black ring-2 ring-offset-2  ring-blue-500 hover:ring-offset-4 bg-green-500 px-5 py-2"
          onClick={() => {
            navigate("/game");
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default DetailsPage;
