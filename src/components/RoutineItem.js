import React from "react";
import { useDispatch } from "react-redux";
import { deleteRoutine } from "../redux/routineSlice";
function RoutineItem({ routine, footer, idx }) {
  const itemColors = [
    "#F09EA7",
    "#F6CA94",
    "#EBD966",
    "#C1EBC0",
    "#C7CAFF",
    "#CDABEB",
    "#F6C2F3",
  ];
  console.log(idx);
  const dispatch = useDispatch();
  return (
    <>
      {footer ? (
        <li
          className="w-[33px] h-[33px] flex justify-center items-center text-white text-xl font-black rounded-full"
          style={{
            backgroundColor: `${itemColors[idx]}`,
          }}
        >
          {idx + 1}
        </li>
      ) : (
        <li className="h-full px-2 text-[12px] flex justify-between items-center shadow-[4px_4px_4px_rgba(0,0,0,0.2)]">
          <div className="flex justify-beetween items-center gap-2">
            <span
              className={`px-2 rounded-lg text-[12px] text-white font-bold`}
              style={{
                backgroundColor: `${itemColors[idx]}`,
              }}
            >
              {"루틴"}
              {idx + 1}
            </span>
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
