import React from "react";
import { useDispatch } from "react-redux";
import { deleteRoutine } from "../redux/routineSlice";
function RoutineItem({ routine, footer, idx }) {
  const itemColors = [
    "#F09EA7",
    "#F6CA94",
    "#F7FA01",
    "#C1EBC0",
    "#C7CAFF",
    "#CDABEB",
    "#F6C2F3",
  ];
  const dispatch = useDispatch();
  return (
    <>
      {footer ? (
        <li
          className="w-[33px] h-[33px] flex justify-center items-center text-white text-xs font-black rounded-full"
          style={{
            backgroundColor: `${itemColors[idx]}`,
          }}
        >
          {routine.exercise.slice(0, 2)}
        </li>
      ) : (
        <li className="h-full px-2 text-[12px] flex justify-between items-center shadow-[4px_4px_4px_rgba(0,0,0,0.2)]">
          <div className="flex justify-beetween items-center gap-2">
            <span className="px-2 rounded-lg text-[12px] text-white bg-[tomato]">
              루틴
            </span>{" "}
            <div className="text-[16px]">
              {routine.exercise} : {routine.time}분
            </div>
          </div>
          <button
            className="text-[16px]"
            onClick={() => dispatch(deleteRoutine(routine.id))}
          >
            ❌
          </button>
        </li>
      )}
    </>
  );
}

export default RoutineItem;
