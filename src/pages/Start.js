// 초기화면 창
import React from "react";
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <main className="w-80 h-[800px] bg-[#FDF6E6] relative top-0 left-0 z-0">
            <div
                className="flex"
                style={{
                    backgroundImage: `url('/images/StartBackground.png')`, // 배경 이미지
                    backgroundPosition: "center", // 이미지 위치
                    backgroundSize: "cover", // 이미지 꽉차게
                    backgroundRepeat: 'no-repeat', // 이미지 반복 지정
                    height: '710px'
                }}>
                <Link to="/Login">
                    <button className="w-[300px] h-[75px] absolute left-2.5 bottom-36 bg-[#ADDE7D] rounded-[50px]">
                        <span className="text-[30px] font-bold ">Start</span>
                    </button>
                </Link>
                <a href="#" className="text-[15px] absolute inset-x-0 bottom-28 underline text-stone-500 flex flex-col items-center">회원가입</a>
            </div>
        </main>


    )
};

export default Start;