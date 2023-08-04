import { useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
 
  useEffect(() => {
    let stopwatch;
    // 타이머 돌아갈시 1초씩 증가
    if (isRunning) {
        stopwatch = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    }
    return () => {
      clearInterval(stopwatch);
    };
  }, [isRunning]);

  // 시작, 일시정지 버튼
  const handleStartPause = () => {
    setIsRunning((prevState) => !prevState);
  };

  // 초기화 버튼
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  return (
    <div className=" w-80 h-[800px] flex flex-col justify-around items-center pt-16 border-2 border-[#E6E6E6]">
      <div className="w-80 h-[300px] flex justify-center items-center border-4 border-[#A5D6A7] rounded-full text-8xl">{time.toFixed(2)}</div>
      <div className="w-60 h-[100px]  flex justify-around items-center mb-20 text-6xl text-[#A5D6A7]">
        <button onClick={handleStartPause}>{isRunning ? "ll" : "▶️"}</button>
        <button onClick={handleReset}>↩</button>
      </div>
    </div>
  );
};

export default StopWatch;
