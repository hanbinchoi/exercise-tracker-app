// 로그인 창
import React from "react";
import { Link } from 'react-router-dom';
import GoogleLogin from '../components/Login/GoogleLogin';
import KaKaoLogin from '../components/Login/KaKaoLogin';


const Login = () => {
    return (
        <main className="w-80 h-[800px] bg-[#ffffff] relative top-0 left-0 z-0">
            <div className="flex flex-col items-center absolute top-[60px] left-2.5">
                <h1 className="text-[30px] font-bold mb-[30px]">로그인</h1>
                <div className="w-[300px] h-[282.878px] mb-[30px]"
                    style={{
                        backgroundImage: `url('/images/LoginImg.png')`, // 배경 이미지
                        backgroundPosition: "center", // 이미지 위치
                        backgroundSize: "cover", // 이미지 꽉차게
                        backgroundRepeat: 'no-repeat', // 이미지 반복 지정
                    }}
                />
                <input id="emailAddress" type="email" placeholder="email" className="w-[300px] h-[50px] rounded-[50px] mb-[15px] border-solid border-2 border-[#afafaf] p-5"></input>
                <input id="userPassword" type="password" placeholder="password" className="w-[300px] h-[50px] rounded-[50px] border-solid border-2 border-[#afafaf] p-5"></input>
            </div>
            <Link to="/Main">
                <button className="w-[300px] h-[75px] bg-[#ADDE7D] rounded-[50px] absolute top-[590px] left-2.5">
                    <span className="text-[30px] font-bold ">Login</span>
                </button>
            </Link>
            {/* 로그인 버튼 */}
            <GoogleLogin />
            <KaKaoLogin />
            <div className="flex items-center absolute top-[690px] left-0">
                <div className="mx-[25px]">
                    <input type="checkbox" className="mr-3" />
                    <a className="text-stone-500">아이디 저장</a>
                </div>
                <div className="mx-[25px]">
                    <input type="checkbox" className="mr-3" />
                    <a className="text-stone-500">자동 로그인</a>
                </div>
            </div>
        </main>
    )
};

export default Login;