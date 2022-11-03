import Axios from "axios";
import React, { useState } from "react";

function Login() {

    const axiosConfig = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const [loginData, setLoginData] = useState([]);

    const [token, setToken] = useState({
        grantType: '',
        accessToken: '',
        tokenExpiresIn: '',
    });

    const login = () => {
        Axios.post('http://localhost:8080/auth/login',
            loginData,
            axiosConfig).then((response) => {
                setToken(response.data)
                alert("로그인 완료");
            })
    }

    const axiosMemberConfig = {
        headers: {
            "Authorization": "Bearer" + " " + token.accessToken
        }
    }

    const member = () => {
        Axios.get('http://localhost:8080/auth/me',
            axiosMemberConfig).then((response) => {
                console.log(response.data);
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
            <button className="get-member" onClick={member}>사용자</button>
        </div>
    )
}

export default Login;
