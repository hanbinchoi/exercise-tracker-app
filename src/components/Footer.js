import React from "react";
// import '../index.css'

const Footer = () => {
    return (
        <footer className="w-80 h-16 bg-[#E1E9DA] flex items-center p-5 absolute top-[736px] left-0 z-10">
            <div className="w-[40px] h-[40px]"
                style={{
                    backgroundImage: `url('/images/AddBtn.png')`, // 배경 이미지
                    backgroundPosition: "center", // 이미지 위치
                    backgroundSize: "cover", // 이미지 꽉차게
                    backgroundRepeat: 'no-repeat', // 이미지 반복 지정
                }}
            />
        </footer>
    )
};

export default Footer;
