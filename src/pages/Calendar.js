// 운동 기록 (ver. 캘린더)
import React, { useState } from "react";
import CalendarLib from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, deleteExercise } from "../redux/exerciseSlice";

const Calendar = () => {
  // value = 선택한 날짜 / onChange = 날짜 변경 함수
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const exercise = useSelector((state) => state.exercise.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  // 추후 css 작업시 마크할 날짜들 (운동을 추가한 날짜들의 배열)
  // const mark = [...new Set(exercise.map((ele) => ele.date))];

  const onDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addExercise({
        // id를 uuid로 바꿀지 생각중...
        id: new Date().getTime() + Math.random(),
        date,
        exercise: value,
      })
    );
    setValue("");
  };
  console.log(exercise);
  return (
    <>
      {/* 캘린더 라이브러리 */}
      <CalendarLib onChange={(d) => onDateChange(d)} value={date} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => handleInputChange(e)}
          value={value}
        />
        <button>추가</button>
      </form>
      <ul>{date}</ul>
      {exercise
        .filter((ele) => ele.date === date)
        .map((ele) => (
          <li key={ele.id}>
            {ele.exercise}
            <button onClick={() => dispatch(deleteExercise(ele.id))}>
              삭제
            </button>
          </li>
        ))}
    </>
  );
};

export default Calendar;
