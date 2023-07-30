import React from "react";
import "./RoutineItem.css";
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
        <li className="item-container">
          <div>
            <span className="routine-tag">루틴</span> {routine.exercise} :{" "}
            {routine.time}분
          </div>
          <button onClick={() => dispatch(deleteRoutine(routine.id))}>
            ❌
          </button>
        </li>
      )}
    </>
  );
}

export default RoutineItem;
