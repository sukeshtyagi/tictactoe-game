import React from "react";
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  const navigate = useNavigate();
  return (
    <div className="outer box-border w-screen h-screen bg-black pt-2">
      <div className="details box-border w-1/2 h-4/6 bg-white mx-auto mt-32 p-4 rounded-xl flex flex-col items-start justify-evenly">
        <div className="playerOne box-border w-full h-2/6 bg-green-400 flex flex-col items-start border rounded-xl border-black px-2 gap-2">
          <label className="mt-1">Enter Player 1 Name</label>
          <input
            type="text"
            className="pt-1 pb-1 px-4 mb-2 text-lg outline-none rounded-xl"
          />
        </div>

        <div className="playerTwo box-border w-full h-2/6 bg-green-400 flex flex-col items-start border rounded-xl border-black px-2 gap-2">
          <label className="mt-1">Enter Player 2 Name</label>
          <input
            type="text"
            className="pt-1 pb-1 px-4 mb-2 text-lg outline-none rounded-xl"
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
