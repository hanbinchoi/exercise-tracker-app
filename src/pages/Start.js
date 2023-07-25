// 초기화면 창
import React from "react";
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <main
            style={{
                width: '360px',
                height: '800px',
                backgroundColor: '#FDF6E6'
            }}
        >
            <div
                className="StartBackground"
                style={{
                    backgroundImage: `url('/images/StartBackground.png')`, // 배경 이미지
                    backgroundPosition: "center", // 이미지 위치
                    backgroundSize: "cover", // 이미지 꽉차게
                    backgroundRepeat: 'no-repeat', // 이미지 반복 지정
                    height: '710px'
                }}>
                <Link to="/Login">
                    <button>
                        <span>Start</span>
                    </button>
                </Link>
                <p>회원가입</p>
            </div>
        </main>


    )
};

export default Start;