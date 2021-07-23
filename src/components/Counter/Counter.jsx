import React, { useState, useEffect } from "react";

//right now it is used as counter, but can be a timer as well
//change + to - where needed and you can adjust the output as well, and if it's minutes or hours, etc
export default function Counter() {
  const hrs = 2; 
  const init_hrs = 0;
  const init_mins = 0;

  const [timerHours, setTimerHours] = useState(init_hrs);
  const [timerMinutes, setTimerMinutes] = useState(init_mins);
  const [isRunning, setIsRunning] = useState(true);
  const [timeout, setTimeout] = useState(false);

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = window.setInterval(() => {
        setTimerMinutes((timerMinutes) => timerMinutes + 1); 
        if (timerMinutes === 59) {
          setTimerMinutes(init_mins);
          setTimerHours((timerHours) => timerHours + 1);

          if (timerHours === (hrs-1)) {
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
      <div onClick={resetTimer}>
              
        :
        {timeout
          ? "XX"
          : timerMinutes === 0
          ? "00"
          : timerMinutes < 10
          ? "0" + timerMinutes
          : timerMinutes}
  
      </div>
  );
}
