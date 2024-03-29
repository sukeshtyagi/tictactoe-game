import React, { useState, useEffect } from "react";

function TimeComponent() {
  const [currentTime, setCurrentTime] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => {
        const [hours, minutes, seconds] = prevTime.split(":").map(Number);
        let newSeconds = seconds + 1;
        let newMinutes = minutes;
        let newHours = hours;
        if (newSeconds === 60) {
          newSeconds = 0;
          newMinutes += 1;
        }
        if (newMinutes === 60) {
          newMinutes = 0;
          newHours += 1;
        }
        return `${String(newHours).padStart(2, "0")}:${String(
          newMinutes
        ).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timeDiv box-border bg-slate-100 text-black px-6 py-2 bg-slate-100 rounded-xl flex flex-col gap-2">
      <label className="timeLabel box-border bg-green-400 text-xl font-normal text-center px-4 py-1 rounded-lg">
        Game Time
      </label>
      <p className="value box-border bg-green-400 text-xl font-normal text-center py-1 rounded-lg">
        
      </p>
    </div>
  );
}

export default TimeComponent;
