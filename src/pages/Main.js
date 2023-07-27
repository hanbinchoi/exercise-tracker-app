// 메인화면 창
import React, { useState } from "react";
// import "react-calendar/dist/Calendar.css"; // css import
import moment from "moment";
import { useSelector } from "react-redux";
import "./Main.css";
import ExerciseInputForm from "../components/ExerciseInputForm";
import ExerciseListView from "../components/ExerciseListView";
import CalendarComponent from "../components/CalendarComponent";
const Main = () => {
  // value = 선택한 날짜 / onChange = 날짜 변경 함수
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const onDateChange = (date) => {
    setDate(moment(date).format("YYYY-MM-DD"));
  };

  return (
    <div className="main-container">
      <ExerciseInputForm date={date} />
      <div className="main-calendar-container">
        <CalendarComponent date={date} onDateChange={onDateChange} />
      </div>
      <ExerciseListView date={date} />
    </div>
  );
};

export default Main;
