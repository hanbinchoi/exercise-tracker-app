import { useDispatch, useSelector } from "react-redux";
import { deleteExercise } from "../redux/exerciseSlice";
import "./ExerciseListView.css";
import RoutineItem from "./RoutineItem";
function ExerciseListView({ date }) {
  const data = useSelector((state) => state.exercise.value);
  const routine = useSelector((state) => state.routine.value);
  const start = new Date(
    routine[0]?.start[0],
    routine[0]?.start[1],
    routine[0]?.start[2]
  );
  const now = new Date(date);
  console.log(start, now);
  const today = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
  const idx = (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  console.log(idx);
  const dispatch = useDispatch();
  return (
    <>
      <div className="todo">Todo.</div>
      <ul className="exercise-container">
        {routine[idx % routine.length] !== undefined && (
          <RoutineItem routine={routine[idx % routine.length]} />
        )}
        {data
          .filter((ele) => ele.date === date)
          .map((ele) => (
            <li key={ele.id}>
              {ele.exercise}: {ele.time}분
              <button onClick={() => dispatch(deleteExercise(ele.id))}>
                ❌
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ExerciseListView;
