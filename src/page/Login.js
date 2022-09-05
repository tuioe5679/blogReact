import React from "react";

function Login() {
    return (
        <div>
            <form action="/login" method="POST"/>
                <input type="text" name="email" placeholder="이메일"/><br/>
                <input type="password" name="password" placeholder="비밀번호"/><br/>
                <input type="submit" value="Login"/><br/>
            <form/>
        </div>
    )
}

export default Login;