import { React, useState } from 'react';
import './main.css'
import ReactHtmlParser from 'html-react-parser';
import Axios from 'axios';


const Main = () => {

    const [boardContent, setBoardContent] = useState({
        title: '',
        content: '',
        nickname: '',
        date: ''
    })

    const [viewContent, setViewContent] = useState([]);

    Axios.get('http://localhost:8080/boards').then((response) => {
        setViewContent(response.data);
    }, [boardContent])

    return (
        <div className='blog-main'>
            <h1>블로그 게시글</h1>
            <div className='blog-container'>
                {viewContent.map(element =>
                    <div>
                        <a href=''>{element.title}</a>
                        <div>{element.content}</div>
                        <div>{element.nickname}</div>
                        <div>{element.date}</div>
                        <br></br>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Main;