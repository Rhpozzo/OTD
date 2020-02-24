import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);
  let t = new Date();
  let time = t.getTime();
  let hour = t.getHours();
  let minutes = Math.floor((time / 1000 / 60) % 60);
  minutes = ("0" + minutes).slice(-2);
  let second = Math.floor((time / 1000) % 60);
  let seconds = second;
  seconds = ("0" + seconds).slice(-2);
  let timeLeft = 0;
  let newSeconds = minutes * 60;
  let sum = newSeconds + second;

  useInterval(() => {
    if (minutes < 30) {
      timeLeft = Math.floor((((1800 - sum) * 1000) / 1000 / 60) % 60);
    }
    if (minutes >= 30) {
      timeLeft = Math.floor(((3600 - sum) * 1000) / 1000 / 60) % 60;
    }
    setCount(timeLeft);
  }, 1000);

  return (
    <div className='container-fluid'>
    <div>
      <h1 className='row alert alert-success'>
        <span className='col-12s time'>{hour}:{minutes}:{seconds}</span>
      </h1>
    </div>
    <div>
      <h1 className='row count'>
            <span className="col-12s min">{count}</span>
      </h1>
    </div>
      <div className='row p'>
         <p className='col-12s p'>Minutes remaining</p>   
      </div>  
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Counter />, rootElement);
export default Counter