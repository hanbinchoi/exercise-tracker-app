import React from "react";
import "./RoutineModal.css";
import ExerciseInputForm from "../ExerciseInputForm";

function RoutineModal({ closeModal }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="content">
          <ExerciseInputForm routine={true} closeModal={closeModal} />
          <button className="modal-close-btn" onClick={() => closeModal()}>
            close
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoutineModal;
