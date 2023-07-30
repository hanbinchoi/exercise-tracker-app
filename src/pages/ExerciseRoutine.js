// 운동 보기 창

import React from "react";
import { useSelector } from "react-redux";
import RoutineAdder from "../components/RoutineAdder";
import RoutineItem from "../components/RoutineItem";

const ExerciseRoutine = () => {
  const routines = useSelector((state) => state.routine.value);
  console.log(routines);
  return (
    <main className="w-80 h-[800px] bg-[#ffffff] absolute top-0 left-0 border-2 border-[#E6E6E6] z-0 ">
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {routines.length < 7 ? <RoutineAdder /> : null}
        {routines.map((ele) => (
          <RoutineItem key={ele.id} routine={ele} />
        ))}
      </div>
    </main>
  );
};

export default ExerciseRoutine;
