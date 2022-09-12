import Axios from "axios";
import { React, useState } from "react";
import { Navigate } from "react-router";

function SingUp() {

    const [User, setUser] = useState({
        email: '',
        password: '',
        name: '',
        nickname: '',
        phoneNumber: '',
    })

    const getValue = e => {
        const { name, value } = e.target;
        setUser({
            ...User,
            [name]: value
        })
    };

    const SingUp = () => {
        Axios.post('http://localhost:8080/singup', {
            email: User.email,
            password: User.password,
            name: User.name,
            nickname: User.nickname,
            phoneNumber: User.phoneNumber
        })
    }

    return (
        <div>
            <input type="text" name="email" placeholder="이메일" onChange={getValue} /><br />
            <input type="password" name="password" placeholder="비밀번호" onChange={getValue} /><br />
            <input type="text" name="name" placeholder="이름" onChange={getValue} /><br />
            <input type="text" name="nickname" placeholder="닉네임" onChange={getValue} /><br />
            <input type="text" name="phoneNumber" placeholder="핸드폰 번호" onChange={getValue} /><br />
            <button onClick={SingUp}>회원가입</button>
        </div>
    )
}

export default SingUp;