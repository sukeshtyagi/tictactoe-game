import React from "react";
import { useNavigate } from "react-router-dom";

function PlayerComponent({ playerOneName, playerTwoName, setIntialValues }) {
  const navigate = useNavigate();
  return (
    <div className="details box-border w-1/2  bg-slate-100 flex flex-col items-center justify-center gap-2 my-4 py-2 rounded-xl">
      <p className="one box-border w-fit h-9 text-center text-black bg-green-400 p-2 flex justify-center gap-2 items-center rounded-lg">
        <span className="text-xl font-normal">{playerOneName}</span>{" "}
        <span>(X)</span>
      </p>
      <p className="two box-border w-fit h-9 text-center text-black bg-green-400 p-2 flex justify-center gap-2 items-center rounded-lg">
        <span className="text-xl font-normal ">{playerTwoName}</span>{" "}
        <span>(O)</span>
      </p>
      <div className="buttonDiv  box-border w-full flex items-center justify-center gap-4 mt-5 ">
        <button
          className="reset box-border w-1/5 sm:w-2/5 bg-green-400 px-1 py-1 mt-2 rounded-xl text-lg text-center hover:ring-2 ring-offset-2 ring-blue-600"
          onClick={() => {
            navigate("/");
          }}
        >
          Reset
        </button>
        <button
          className="restart box-border w-fit sm:w-2/5 bg-green-400 px-1 py-1 mt-2 rounded-xl text-lg text-center hover:ring-2 ring-offset-2 ring-blue-600"
          onClick={() => {
            setIntialValues(Array(9).fill("Enter"));
            localStorage.setItem("restart", true);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default PlayerComponent;
