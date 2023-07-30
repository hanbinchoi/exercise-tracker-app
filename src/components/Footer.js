import React from "react";
import RoutineAdder from "./RoutineAdder";
import { useSelector } from "react-redux";
import RoutineItem from "./RoutineItem";
import { Link } from "react-router-dom";
// import '../index.css'

const Footer = () => {
  const routines = useSelector((state) => state.routine.value);

  return (
    <footer className="w-80 h-16 bg-[#E1E9DA] flex items-center p-5 absolute top-[736px] left-0">
      {/* ul로 리팩토링 필요 */}
      {/* <ul> */}
      {routines.length < 7 ? <RoutineAdder footer={true} /> : null}
      {routines.map((ele) => (
        <Link key={ele.id} to="/exercise-routine">
          <RoutineItem footer={true} routine={ele} />
        </Link>
      ))}
      {/* </ul> */}
    </footer>
  );
};

export default Footer;
