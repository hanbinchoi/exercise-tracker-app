// 로그인 창
import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <main
            style={{
                width: '360px',
                height: '800px'
            }}>
            <div>
                <h1>로그인</h1>
                <div
                    style={{
                        backgroundImage: `url('/images/LoginImg.png')`, // 배경 이미지
                        backgroundPosition: "center", // 이미지 위치
                        backgroundSize: "cover", // 이미지 꽉차게
                        backgroundRepeat: 'no-repeat', // 이미지 반복 지정
                        width: '300px',
                        height: '282.878px'
                    }}
                />
                <input></input>
                <input></input>
            </div>
            <Link to="/Main">
                <button>
                    <span>Login</span>
                </button>
            </Link>
            <div>
                <input type="checkbox" />
                <a>아이디 저장</a>
            </div>
            <div>
                <input type="checkbox" />
                <a>자동 로그인</a>
            </div>
        </main>
    )
};

export default Login;