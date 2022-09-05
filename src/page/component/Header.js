import React from "react";

function Header(){
    return (
        <div className='blog-nav'>
                <div className='title'><a href='/'>blog</a></div>
                <ul className='menu'>
                    <li><a href='/login'>로그인</a></li>
                    <li><a href='/write'>글쓰기</a></li>
                </ul>
            </div>
    )
}

export default Header;