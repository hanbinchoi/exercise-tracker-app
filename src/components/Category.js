import { Link } from "react-router-dom";

const Cartegory = ({ setCategoryVisible }) => {
  // 카테고리 숨기기
  const hideCategory = () => {
    setCategoryVisible((prev) => !prev);
  };

  return (
    <main className="w-[260px] h-[800px] bg-[#ffffff] fixed top-0 left-0 z-20 border-solid border border-[#afafaf]">
      <button
        className="w-[25px] h-[25px] absolute top-[25px] right-[20px]"
        style={{
          backgroundImage: `url('/images/closeBtn.png')`, // 배경 이미지
          backgroundPosition: "center", // 이미지 위치
          backgroundSize: "cover", // 이미지 꽉차게
          backgroundRepeat: "no-repeat", // 이미지 반복 지정
        }}
        onClick={hideCategory} // 버튼 클릭 시 카테고리 숨기기
      />
      <div className="flex flex-col items-center absolute top-[100px] left-[25px]">
        <div
          className="w-[110px] h-[110px] rounded-full"
          style={{
            backgroundImage: `url('/images/userImg.png')`, // 배경 이미지
            backgroundPosition: "center", // 이미지 위치
            backgroundSize: "cover", // 이미지 꽉차게
            backgroundRepeat: "no-repeat", // 이미지 반복 지정
          }}
        />
        <span className="text-[25px] font-bold text-stone-700 mt-[15px]">
          {" "}
          User Name{" "}
        </span>
      </div>

      {/* 카테고리 메뉴 */}
      <ul className="w-[258px] absolute bottom-[0px] left-[0px]">
        {/* 메인창 */}
        <Link to="/main">
          <li className="text-[20px] py-[15px] pl-[25px] border-solid border-t border-[#afafaf] ">
            메인창
          </li>
        </Link>
        {/* 운동 기록 */}
        <Link to="/to-record">
          <li className="text-[20px] py-[15px] pl-[25px] border-solid border-t border-[#afafaf]">
            운동 기록
          </li>
        </Link>
        {/* 운동 루틴 작성 */}
        <Link to="/exercise-routine">
          <li className="text-[20px] py-[15px] pl-[25px] border-solid border-t border-[#afafaf]">
            운동 루틴 작성
          </li>
        </Link>
        {/* 캘린더 */}
        <Link to="/calendar">
          <li className="text-[20px] py-[15px] pl-[25px] border-solid border-t border-[#afafaf]">
            캘린더
          </li>
        </Link>
        {/* 타이머 */}
        <Link to="/timer">
          <li className="text-[20px] py-[15px] pl-[25px] border-solid border-t border-[#afafaf]">
            타이머
          </li>
        </Link>
        {/* 주변 헬스장 찾기 */}
        <Link to="/mapSearch">
          <li className="text-[20px] py-[15px] pl-[25px] border-solid border-t border-[#afafaf]">
            주변 헬스장 찾기
          </li>
        </Link>
        {/* 내 정보 보기 */}
        <Link to="/myInfo">
          <li className="text-[20px] py-[15px] pl-[25px] border-solid border-t border-[#afafaf]">
            내 정보 보기
          </li>
        </Link>
        {/* 설정하기 */}
        <Link to="/settings">
          <li className="text-[20px] py-[15px] pl-[25px] border-solid border-t border-[#afafaf]">
            설정하기
          </li>
        </Link>
      </ul>
    </main>
  );
};

export default Cartegory;
