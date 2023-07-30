// 운동 입력 창
import CalendarLib from "react-calendar";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExerciseInputForm from "../components/ExerciseInputForm";
import ExerciseListView from "../components/ExerciseListView";
const ToRecord = () => {
    const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
    const data = useSelector((state) => state.exercise.value);
    const dispatch = useDispatch();
    const [isShowCalendar, setIsShowCalendar] = useState(false);

    const mark = [...new Set(data.map((ele) => ele.date))];

    const onDateChange = (date) => {
        setDate(moment(date).format("YYYY-MM-DD"));
        setIsShowCalendar(false);
    };

    const handleCalendarView = () => {
        setIsShowCalendar(!isShowCalendar);
    };
    return (
        <main className="w-80 h-[800px] bg-[#ffffff] absolute top-0 left-0 border-2 border-[#E6E6E6] z-0 ">
            <div className=" px-[10px] absolute top-[80px] w-[100%]">
                <ExerciseInputForm date={date} />
                <button className="bg-[#ADDE7D] p-[20px] rounded-2xl " onClick={handleCalendarView}>
                    날짜 선택하기
                </button>
                {isShowCalendar ? (
                    <CalendarLib
                        onChange={(d) => onDateChange(d)}
                        value={date}
                        tileClassName={({ date, view }) => {
                            if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                                return "highlight";
                            }
                        }}
                    />
                ) : null}
                <ExerciseListView date={date} />
            </div>
        </main>
    );
};

export default ToRecord;