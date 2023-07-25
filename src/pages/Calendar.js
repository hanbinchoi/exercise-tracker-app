// 운동 기록 (ver. 캘린더)
import React, { useState } from "react";
import CalendarLib from "react-calendar";
// import "react-calendar/dist/Calendar.css"; // css import
import moment from "moment";
import { useSelector } from "react-redux";
import "./CalendarStyle.css";
import ExerciseInputForm from "../components/ExerciseInputForm";
import ExerciseListView from "../components/ExerciseListView";
const Calendar = () => {
  // value = 선택한 날짜 / onChange = 날짜 변경 함수
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const data = useSelector((state) => state.exercise.value);

  // 운동을 추가한 날짜들
  const mark = [...new Set(data.map((ele) => ele.date))];

  const onDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  return (
    <div className="container">
      <ExerciseInputForm date={date} />
      {/* 캘린더 라이브러리 */}
      <div className="calendar-container">
        {" "}
        <CalendarLib
          // 달 이동 화살표
          nextLabel={null}
          prevLabel={null}
          next2Label={null}
          prev2Label={null}
          // 일에 숫자만 들어가기
          formatDay={(locale, date) =>
            date.toLocaleString("en", { day: "numeric" })
          }
          // 값이 변경 될 때 호출되는 함수
          onChange={(d) => onDateChange(d)}
          value={date}
          tileClassName={({ date, view }) => {
            if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
              return "highlight";
            }
          }}
        />
      </div>
      <ExerciseListView date={date} />
    </div>
  );
};

export default Calendar;
