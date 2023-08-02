import React from "react";
import { useDispatch } from "react-redux";
import { deleteRoutine } from "../redux/routineSlice";
function RoutineItem({ routine, footer }) {
  const dispatch = useDispatch();
  return (
    <>
      {footer ? (
        <li
          className="w-[35px] h-[35px]"
          style={{
            backgroundPosition: "center", // 이미지 위치
            backgroundSize: "cover", // 이미지 꽉차게
            backgroundRepeat: "no-repeat", // 이미지 반복 지정
            backgroundColor: "tomato",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "700",
            fontSize: "1.5rem",
          }}
        >
          {routine.exercise.slice(0, 1)}
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
