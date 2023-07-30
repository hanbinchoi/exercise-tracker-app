import moment from "moment";
import CalendarLib from "react-calendar";
import { useSelector } from "react-redux";
import "./CalendarComponent.css";
import styled from "styled-components";

const CalendarContainer = styled.div`
  > .react-calendar {
    height:400px;
    margin-top: 30px;
    // yyyy-mm 페이지 부분
    > .react-calendar__navigation {
    height:50px;
      > .react-calendar__navigation__arrow {
        width:50px;
      }
      > .react-calendar__navigation__label {
        > span {
          font-size: 15px;
          font-weight:bold;
          padding : 10px 30px;
        }
      }
    }
    // 큰 달력 부분
    > .react-calendar__viewContainer {
      display: flex;
      align-items: flex-start;
      > .react-calendar__month-view{
        > div {
          > div {
            // 요일 부분
            > .react-calendar__month-view__weekdays {
              > .react-calendar__month-view__weekdays__weekday {
                // 요일에 기본값인 도트 밑줄 지워주기
                > abbr {
                  text-decoration : none;
                }
              }
              // 공휴일(요일) 색상 바꿔주기
              > .react-calendar__month-view__weekdays__weekday--weekend {
                color : red;
              }
            }
            // 일자 부분
            > .react-calendar__month-view__days {
              > .react-calendar__month-view__days__day--weekend{
                color : red;
              }
            }
          }
        }
      }
    }
  }
`

function CalendarComponent({ date, onDateChange }) {
  const data = useSelector((state) => state.exercise.value);
  // 운동을 추가한 날짜들
  const mark = [...new Set(data.map((ele) => ele.date))];

  return (
    <CalendarContainer>
      <CalendarLib
        // 달 이동 화살표
        // nextLabel={null}
        // prevLabel={null}
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
    </CalendarContainer>
  );
}
export default CalendarComponent;
