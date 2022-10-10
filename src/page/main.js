import { React, useEffect, useState } from 'react';
import '../css/main.css'
import Axios from 'axios';
import Header from './component/header';
import { Link } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';


function Main() {

    const [viewContent, setViewContent] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/boards').then((response) => {
            setViewContent(response.data);
        }).catch(err => console.log(err));
    });

    return (
        <div className='blog-main'>
            <Header></Header>
            <div className='blog-profile'>
                <img src='https://avatars.githubusercontent.com/u/70015636?s=400&u=0dfe91cbb797e3a9028c41910be154eb46447314&v=4' alt='이미지'></img>
                <div className='nickname'>
                    코타
                </div>
                <div className='username'>
                    tuioe
                </div>
                <div className='logo'>
                    <a className='github' href='https://github.com/tuioe5679'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    </a>
                    <a className='velog' href='https://velog.io/@vlsxm'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Velog</title>
                            <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z" /></svg>
                    </a>
                    <a className='gmail' href='https://vlsxm63@gmail.com'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
                    </a>
                </div>
            </div>
            <div className='borad'>
                {viewContent.map(item =>
                    <div className='borad_list'>
                        <div className='board_title'>
                            <Link to={`/board/${item.idx}`}>
                                {item.title}
                            </Link>
                            안녕하세요 기술 블로그 입니다
                        </div>
                        <div>{item.date}</div>
                        <div className='board_content'>
                            <Viewer initialValue={item.content}></Viewer>
                        </div>
                        <hr></hr>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Main;