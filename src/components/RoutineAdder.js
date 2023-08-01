import { useState } from "react";
import ModalPortal from "./modal/ModalPortal";
import RoutineModal from "./modal/RoutineModal";
import "./RoutineAdder.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modalSlice";

function RoutineAdder({ footer }) {
  const modal = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  console.log(modal);
  return (
    <div>
      {footer ? (
        <button
          className="w-[40px] h-[40px]"
          style={{
            backgroundImage: `url('/images/AddBtn.png')`, // 배경 이미지
            backgroundPosition: "center", // 이미지 위치
            backgroundSize: "cover", // 이미지 꽉차게
            backgroundRepeat: "no-repeat", // 이미지 반복 지정
          }}
          onClick={() => dispatch(openModal())}
        />
      ) : (
        <button
          className="add-routine-btn"
          onClick={() => dispatch(openModal())}
        >
          루틴 추가하기
        </button>
      )}
      {modal && (
        <ModalPortal>
          <RoutineModal />
        </ModalPortal>
      )}
    </div>
  );
}

export default RoutineAdder;
