import Axios from "axios";
import React, { useState } from "react";
import qs from 'qs';

function Login() {

    const axiosConfig = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }

    const [loginData, setLoginData] = useState([]);

    const login = () => {
        Axios.post('http://localhost:8080/login', qs.stringify(loginData),
            axiosConfig).then(() => {
                alert("로그인 완료");
            })
    }

    const getvalue = e => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    return (
        <div>
            <input type="text" name="email" placeholder="이메일" onChange={getvalue} /><br />
            <input type="password" name="password" placeholder="비밀번호" onChange={getvalue} /><br />
            <button className="loginsubmit" onClick={login}>로그인</button>
        </div>
    )
}

export default Login;