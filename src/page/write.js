/* eslint-disable */
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from 'react-router';
import Axios from 'axios';
import '../write.css';


function Write() {
    const navigate = useNavigate();

    const [Content, setConent] = useState({
        title: '',
        content: '',
    })

    const getValue = e => {
        const { name, value } = e.target;
        setConent({
            ...Content,
            [name]: value
        })
    };

    const submitPosting = () => {
        Axios.post('http://localhost:8080/board', {
            title: Content.title,
            content: Content.content
        }).then(() => {
            alert('등록 완료');
        })
        navigate('/main');
    }

    return (
        <div className="App">
            <h1>Blog</h1>
            <div className='form-wrapper'>
                <input className='title-input' type='text' placeholder='제목' onChange={getValue}
                    name='title' />
                <CKEditor
                    editor={ClassicEditor}
                    data=""
                    onReady={editor => {
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setConent({
                            ...Content,
                            content: data
                        })
                    }}
                    onBlur={(event, editor) => {
                    }}
                    onFocus={(event, editor) => {
                    }}
                />
            </div>
            <button className='submit-btn'
                onClick={submitPosting}>글쓰기</button>
        </div>
    );
}

export default Write;