// 운동 기록 (ver. 캘린더)
import React, { useState } from "react";
// import "react-calendar/dist/Calendar.css"; // css import
import moment from "moment";
import CalendarComponent from "../components/CalendarComponent";
import SimpleExerciseListView from "../components/SimpleExerciseListView";
import "./Calendar.css"
const Calendar = () => {
  // value = 선택한 날짜 / onChange = 날짜 변경 함수
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const onDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  return (
    <div className="container">
      <CalendarComponent date={date} onDateChange={onDateChange} />
      <hr/>
      <SimpleExerciseListView date={date} />
    </div>
  );
};

export default Calendar;
