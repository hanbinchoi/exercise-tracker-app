import React, { useEffect, useState, useRef } from 'react';

function Timer() {
  const [initialMin, setInitialMin] = useState(0);
  const [initialSec, setInitialSec] = useState(0);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [count, setCount] = useState(0);

  const [isStarting, setIsStarting] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const intervalRef = useRef(null);

  const calTotalSec = () => {
    const totalSec = Number(initialMin) * 60 + Number(initialSec);
    setCount(totalSec);
    setInitialMin(0);
    setInitialSec(0);
  };

  const countdown = () => {
    setCount((c) => c - 1);
  };

  const initInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const timeFormat = () => {
    if (count < 0) {
      initInterval();
      setIsStarting(false);
      return null;
    }
    const min = Math.floor(count / 60);
    const sec = count % 60;
    setMinutes(min);
    setSeconds(sec);
  };

  const start = () => {
    if (!isStarting) {
      calTotalSec();
      timeFormat();
      setIsPause(false);
      intervalRef.current = setInterval(countdown, 1000);
      setIsStarting(true);
      console.log('start');
    }
  };

  const pauseAndResume = () => {
    if (count === 0) {
      initInterval();
      setIsPause(false);
    }

    if (count !== 0) {
      if (!isPause) {
        initInterval();
        setIsPause(true);
      } else {
        intervalRef.current = setInterval(countdown, 1000);
        setIsPause(false);
      }
    }
  };

  const reset = () => {
    initInterval();
    setIsPause(false);
    setIsStarting(false);
    setCount(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(timeFormat, [count]);

  return (
    <>
    <div>d</div>
    <div>d</div>
    <div>d</div>
    <div>d</div>
          <input
            type="number"
            value={initialMin}
            onChange={(e) => setInitialMin(e.target.value)}
          />
          <div className="text">minutes</div>
          <input
            type="number"
            value={initialSec}
            onChange={(e) => setInitialSec(e.target.value)}
          />
          <div className="text">seconds</div>
        <button type="button" onClick={start}>
          START
        </button>
        <button type="button" onClick={pauseAndResume}>
          PAUSE/RESUME
        </button>
        <button type="button" onClick={reset}>
          RESET
        </button>
        {minutes >= 10 ? minutes : `0${minutes}`} :{' '}
        {seconds >= 10 ? seconds : `0${seconds}`}
        </>
  );
}


export default Timer;