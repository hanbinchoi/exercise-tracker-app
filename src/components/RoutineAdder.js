import { useState } from "react";
import ModalPortal from "./modal/ModalPortal";
import RoutineModal from "./modal/RoutineModal";
import "./RoutineAdder.css";

function RoutineAdder({ footer }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      {footer ? (
        <div
          className="w-[40px] h-[40px]"
          style={{
            backgroundImage: `url('/images/AddBtn.png')`, // 배경 이미지
            backgroundPosition: "center", // 이미지 위치
            backgroundSize: "cover", // 이미지 꽉차게
            backgroundRepeat: "no-repeat", // 이미지 반복 지정
          }}
          onClick={openModal}
        />
      ) : (
        <button className="add-routine-btn" onClick={openModal}>
          루틴 추가하기
        </button>
      )}
      {modalOpen && (
        <ModalPortal>
          <RoutineModal closeModal={closeModal} />
        </ModalPortal>
      )}
    </div>
  );
}

export default RoutineAdder;
