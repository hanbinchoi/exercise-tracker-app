import React, { useEffect, useState, useRef } from "react";

function TimerComponents({setIsTimer}) {
  const [isSetTime,setIsSetTime] = useState(true);

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
    if(initialMin===0&&initialSec ===0) {
      return alert("시간을 설정해주세요");
    }
    
    if (!isStarting) {
      calTotalSec();
      timeFormat();
      setIsPause(false);
      intervalRef.current = setInterval(countdown, 1000);
      setIsStarting(true);
      console.log("start");
      setIsSetTime(false);
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
    setIsSetTime(true)
  };

  useEffect(timeFormat, [count]);

  return (
    <>
      <div className=" w-80 h-[800px] flex flex-col justify-around items-center pt-16 border-2 border-[#E6E6E6]">

      
      {/* 타이머 시간 */}
      <div className="w-80 h-[300px] flex justify-center items-center mt-10 border-4 border-[#66bb6a] rounded-full text-8xl">
      <p>{minutes >= 10 ? minutes : `0${minutes}`} </p>
      <p className="mx-3">:{" "}</p>
      <p>{seconds >= 10 ? seconds : `0${seconds}`}</p>
      </div>

      {/* 타이머 입력칸 */}
      {isSetTime?<div className="flex  justify-center">
      <input
        className="w-10 text-center mx-3 border-2 border-[#66bb6a]"
        value={initialMin}
        onChange={(e) => setInitialMin(e.target.value)}
      />
      <div className="text-2xl">:</div>
      <input
        className="w-10 text-center mx-3 border-2 border-[#66bb6a]"
        value={initialSec}
        onChange={(e) => setInitialSec(e.target.value)}
      />
      </div>:<p className="flex justify-center items-center">리셋을 누르면 입력창이 나타납니다.</p>}

      {/* 타이머 실행 버튼 */}
      <div className="w-80 flex justify-center mb-40  text-5xl text-[#66bb6a] ">
      <button className="mr-5"type="button" onClick={start}>
      ▶️
      </button>
      <button className="mx-1" type="button" onClick={pauseAndResume}>
      ▶️II
      </button>
      <button className="ml-8" type="button" onClick={reset}>
      ↩
      </button>
      </div>
      
      </div>
    </>
  );
}

export default TimerComponents;
