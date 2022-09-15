import { React, useEffect, useState } from 'react';
import '../css/main.css'
import ReactHtmlParser from 'html-react-parser';
import Axios from 'axios';
import Header from './component/Header';
import { Link } from 'react-router-dom';


function Main (){

    const [viewContent, setViewContent] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/boards').then((response) => {
            setViewContent(response.data);
        }).catch(err => console.log(err))
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
                <hr></hr>
            </div>
            <div className='borad'>
                {viewContent.map(item =>
                    <div>
                        <Link to={`/board/${item.idx}`}>{item.title}</Link>
                        <div>{item.nickname}</div>
                        <div>{item.date}</div>
                        <div>{ReactHtmlParser(item.content)}</div>
                        <hr></hr>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Main;