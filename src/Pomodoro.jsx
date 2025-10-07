import { useState, useEffect, useRef } from "react";

function Pomodoro() {
  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work");

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 0) {
            if (mode === "work") {
              setMode("break");
              return BREAK_TIME;
            } else {
              setMode("work");
              return WORK_TIME;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, mode]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>{mode === "work" ? "Ажиллах цаг" : "Амрах цаг"}</h2>
      <div>{formatTime(timeLeft)}</div>
      <div>
        {!isRunning ? (
          <button onClick={() => setIsRunning(true)}>Start</button>
        ) : (
          <button onClick={() => setIsRunning(false)}>Stop</button>
        )}
        <button
          onClick={() => {
            setIsRunning(false);
            setMode("work");
            setTimeLeft(WORK_TIME);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
