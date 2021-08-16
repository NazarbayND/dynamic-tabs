import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

export default function Timer() {
  const hrs = 2;
  const init_hrs = 0;
  const init_mins = 0;

  const [timerHours, setTimerHours] = useState(init_hrs);
  const [timerMinutes, setTimerMinutes] = useState(init_mins);
  const [isRunning, setIsRunning] = useState(false);
  const [timeout, setTimeout] = useState(false);

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = window.setInterval(() => {
        setTimerMinutes((timerMinutes) => timerMinutes + 1);
        if (timerMinutes === 59) {
          setTimerMinutes(init_mins);
          setTimerHours((timerHours) => timerHours + 1);

          if (timerHours === hrs - 1) {
            handleTimeout();
          }
        }
      }, 60 * 1000);
    } else {
      clearInterval(intervalID);
    }
    return () => window.clearInterval(intervalID);
  }, [isRunning, timerMinutes, timerHours]); //?

  const resetTimer = () => {
    setTimerHours(init_hrs);
    setTimerMinutes(init_mins);
    setIsRunning(true);
    setTimeout(false);
    //update component?
  };

  function handleTimeout() {
    setIsRunning(false);
    setTimeout(true);
  }

  return (
    <li
      className="nav-item"
      // style={{ padding: "0 5px" }}
      onClick={resetTimer}
    >
      <Link to="#" style={{ padding: "0 8px" }}>
        :
        {timeout
          ? "XX"
          : timerMinutes === 0
          ? "00"
          : timerMinutes < 10
          ? "0" + timerMinutes
          : timerMinutes}
      </Link>
    </li>
  );
}
