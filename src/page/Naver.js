import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";

function Naver() {

    const { naver } = window
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER;
    const NAVER_CALLBACK_URL = "http://localhost:3000/naver";

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false,
            // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
            loginButton: { color: 'green', type: 3, height: 58 },
            callbackHandle: true,
        })
        naverLogin.init()

        naverLogin.getLoginStatus(async function (status) {
            if (status) {
                Axios.post('http://localhost:8080/loginuser', {
                    loginToken: localStorage.getItem("access_token")
                }).then(() => {
                    alert('회원가입 완료');
                })
            }
        })
    }

    const userAccessToken = () => {
        window.location.href.includes('access_token') && getToken()
    }

    const getToken = () => {
        const token = window.location.href.split('=')[1].split('&')[0]
        localStorage.setItem('access_token', token)
        console.log(localStorage.getItem("access_token"))
    }


    useEffect(() => {
        initializeNaverLogin()
        userAccessToken()
    }, [])


    return (
        <div>
            <div id="naverIdLogin"></div>
        </div>
    )
};
export default Naver;