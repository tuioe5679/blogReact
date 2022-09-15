import { Axios } from "axios";
import React, { useState } from "react";

function Login() {
    const [loginData, setLoginData] = useState([]);

    const login = () => {
        Axios.post('http://localhost:8080/login', {
            email: loginData.email,
            password: loginData.password
        }).then(() => {
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