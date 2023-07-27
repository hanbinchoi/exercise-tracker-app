import moment from "moment";
import CalendarLib from "react-calendar";
import { useSelector } from "react-redux";
import "./CalendarComponent.css";
function CalendarComponent({ date, onDateChange }) {
  const data = useSelector((state) => state.exercise.value);
  // 운동을 추가한 날짜들
  const mark = [...new Set(data.map((ele) => ele.date))];

  return (
    <div className="calendar-container">
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
  );
}
export default CalendarComponent;
