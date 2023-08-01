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
                <Link to="/login">
                    <button className="w-72 h-20 absolute left-2.5 top-[590px] bg-[#ADDE7D] rounded-2xl ">
                        <span className="text-[30px] font-bold ">Start</span>
                    </button>
                </Link>

            </div>
        </main>


    )
};

export default Start;