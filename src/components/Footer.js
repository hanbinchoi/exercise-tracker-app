import React from "react";
// import '../index.css'

const Footer = () => {
    return (
        <footer
            style={{
                height: '72px',
                width: '360px',
                backgroundColor: '#E1E9DA'
            }}
        >
            <div
                style={{
                    backgroundImage: `url('/images/AddBtn.png')`, // 배경 이미지
                    backgroundPosition: "center", // 이미지 위치
                    backgroundSize: "cover", // 이미지 꽉차게
                    backgroundRepeat: 'no-repeat', // 이미지 반복 지정
                    height: '40px',
                    width: '40px'
                }}
            />
        </footer>
    )
};

export default Footer;
