import React from "react";
import '../../css/header.css';

function Header(){
    return (
        <div className='blog-nav'>
                <div className='title'><a href='/'>blog</a></div>
                <ul className='menu'>
                    <li className="administrator"><a href='/admin'>관리자</a></li>
                    <li className="login"><a href='/login'>로그인</a></li>
                    <li className="write"><a href='/write'>글쓰기</a></li>
                    <li className="singup"><a href='/singup'>회원가입</a></li>
                </ul>
            </div>
    )
}

export default Header;