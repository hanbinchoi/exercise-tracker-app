import { useDispatch, useSelector } from "react-redux";
import { deleteExercise } from "../redux/exerciseSlice";
import "./ExerciseListView.css";
function ExerciseListView({ date }) {
  const data = useSelector((state) => state.exercise.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="todo">Todo.</div>
      <ul className="exercise-container">
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
