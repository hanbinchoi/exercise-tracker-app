import { useState } from "react";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../redux/exerciseSlice";
import { addRoutine } from "../redux/routineSlice";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Input from "./Input";
import Exercise from "./Exercise";
import "./ExerciseInput.css";

function ExerciseInputForm({ date, routine, closeModal }) {
  const [exercise, exerciseBind, resetExercise] = useInput("");
  const [time, timeBind, resetTime] = useInput("");
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const routineData = useSelector((state) => state.routine.value);
  const handleExerciseClick = (e, data) => {
    e.stopPropagation();
    exerciseBind.onChange(e, data);
    setIsShowDropdown(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (routine) {
      if (routineData.length === 0) {
        const now = new Date();
        const start = [now.getFullYear(), now.getMonth() + 1, now.getDate()];
        dispatch(
          addRoutine({
            id: new Date().getTime() + Math.random(),
            start,
            idx: routineData.length,
            exercise,
            time,
          })
        );
      } else {
        dispatch(
          addRoutine({
            id: new Date().getTime() + Math.random(),
            idx: routineData.length,
            exercise,
            time,
          })
        );
      }

      closeModal();
    } else {
      dispatch(
        addExercise({
          id: new Date().getTime() + Math.random(),
          date,
          exercise,
          time,
        })
      );
    }

    setIsShowDropdown(false);
    resetExercise();
    resetTime();
  };

  const handleClickExerciseList = () => {
    setIsShowDropdown(!isShowDropdown);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="exercise-input-container">
        <Input
          required={true}
          type="text"
          placeholder={"운동명 입력"}
          value={exerciseBind}
        />
        <button
          className="exerciselist-btn"
          type="button"
          onClick={handleClickExerciseList}
        >
          {isShowDropdown ? (
            <FaCaretUp size={"20px"} />
          ) : (
            <FaCaretDown size={"20px"} />
          )}
        </button>{" "}
      </div>

      {isShowDropdown ? (
        <>
          <Exercise handleExerciseClick={handleExerciseClick} />
        </>
      ) : null}
      <div className="time-input-container">
        <Input
          required={true}
          type="number"
          placeholder={"시간 입력"}
          value={timeBind}
        />
        <button className="submit-btn">입력</button>
      </div>
    </form>
  );
}

export default ExerciseInputForm;
