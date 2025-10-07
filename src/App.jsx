import { useState } from "react";
import Pomodoro from "./Pomodoro";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="section">
        <div className="navi">
          <div className="pomo">
            <div className="pomophoto"></div>
            <p className="pomoText"> Pomofocus</p>
          </div>
          <button className="report"> Report</button>
          <button className="setting"> Setting</button>
          <button className="sign"> Sign In</button>
          <button className="tseg">:</button>
        </div>
        <button className="navi2">
          <div className="buttons">
            <button className="button2">Pomodoro</button>
            <button className="button2">Short Break</button>
            <button className="button2">Long Break</button>
          </div>
          <Pomodoro />
        </button>
      </div>
    </>
  );
}

export default App;
