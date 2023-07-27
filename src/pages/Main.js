// 메인화면 창
import React from "react";
import KakaoUserInfo from "../components/Login/KaKaoUserInfo";

const Main = () => {
    return (
        <main className="w-80 h-[800px] bg-[#FDF6E6] absolute top-0 left-0 z-0">
            <KakaoUserInfo />
        </main>
    )
};

export default Main;