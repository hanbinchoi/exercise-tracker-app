import { useState } from "react";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { addExercise } from "../redux/exerciseSlice";
import { addRoutine } from "../redux/routineSlice";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Input from "./Input";
import Exercise from "./Exercise";
import { closeModal } from "../redux/modalSlice";

function ExerciseInputForm({ date, routine }) {
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

      dispatch(closeModal());
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
      <div className="mb-[10px] w-full grid grid-cols-[7fr,2fr] gap-4">
        <Input
          required={true}
          type="text"
          placeholder={"운동명 입력"}
          value={exerciseBind}
        />
        <button
          className="w-full flex justify-center items-center"
          onClick={handleClickExerciseList}
        >
          {isShowDropdown ? (
            <FaCaretUp size={"30px"} />
          ) : (
            <FaCaretDown size={"30px"} />
          )}
        </button>{" "}
        {isShowDropdown ? (
          <div className="h-[250px] overflow-scroll">
            <Exercise handleExerciseClick={handleExerciseClick} />
          </div>
        ) : null}
      </div>

      <div className="w-full grid grid-cols-[7fr,2fr] gap-4">
        <Input
          required={true}
          type="number"
          placeholder={"시간 입력"}
          value={timeBind}
        />
        <button className="bg-[#ADDE7D] text-white font-bold rounded-md">
          입력
        </button>
      </div>
    </form>
  );
}

export default ExerciseInputForm;
