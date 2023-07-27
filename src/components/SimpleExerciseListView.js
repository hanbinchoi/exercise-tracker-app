import { useSelector } from "react-redux";
import "./SimpleExerciseListView.css";
function SimpleExerciseListView({ date }) {
  const data = useSelector((state) => state.exercise.value);
  return (
    <div className="simple-container">
      <ul className="simple-exercise-list-container">
        {data
          .filter((ele) => ele.date === date)
          .map((ele) => (
            <li key={ele.id}>
              {ele.exercise}: {ele.time}분
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SimpleExerciseListView;
