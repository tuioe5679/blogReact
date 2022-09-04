import { React, useState } from 'react';
import '../main.css'
import ReactHtmlParser from 'html-react-parser';
import Axios from 'axios';
import Header from '../component/Header';


const Main = () => {

    const [viewContent, setViewContent] = useState([]);

    Axios.get('http://localhost:8080/boards').then((response) => {
        setViewContent(response.data);
    })

    return (
        <div className='blog-main'>
            <Header></Header>
            <div className='borad'>
                {viewContent.map(element =>
                    <div>
                        <a href='/write'>{element.title}</a>
                        <div>{ReactHtmlParser(element.content)}</div>
                        <div>{element.nickname}</div>
                        <div>{element.date}</div>
                        <hr></hr>
                    </div>
                )} 
            </div>
        </div> 
    ) 
}

export default Main;