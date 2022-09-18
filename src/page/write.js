/* eslint-disable */
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from 'react-router';
import Header from "./component/Header"
import Axios from 'axios';
import '../css/write.css';


function Write() {
    const navigate = useNavigate();

    const [Board, setBoard] = useState({
        title: '',
        content: '',
    })

    const getValue = e => {
        const { name, value } = e.target;
        setBoard({
            ...Board,
            [name]: value
        })
    };

    const submitPosting = () => {
        Axios.post('http://localhost:8080/board', {
            title: Board.title,
            content: Board.content
        }).then(() => {
            alert('등록 완료');
        })
        navigate('/main');
    }

    return (
        <div className="App">
            <Header></Header>
            <div className='form-wrapper'>
                <div className='title'>
                    <div className='title-name'>제목</div>
                    <input className='title-input' type='text' placeholder='  제목을 입력'
                        onChange={getValue} name='title' />
                </div>
                <CKEditor
                    editor={ClassicEditor}
                    data=""
                    onReady={editor => {
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setBoard({
                            ...Board,
                            content: data
                        })
                    }}
                    onBlur={(event, editor) => {
                    }}
                    onFocus={(event, editor) => {
                    }}
                />
            </div>
            <div className='Button'>
                <button className='cancel-btn'>취소</button>
                <button className='submit-btn' onClick={submitPosting}>글쓰기</button>
            </div>
        </div>
    );
}

export default Write;