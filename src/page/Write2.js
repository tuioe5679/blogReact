/* eslint-disable */
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from 'react-router';
import Header from "./component/Header"
import Axios from 'axios';
import '../css/write.css';

const API_URL = "https://77em4-8080.sse.codesandbox.io";
const UPLOAD_ENDPOINT = "upload_files";



function Write() {


    function uploadAdapter(loader) {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const body = new FormData();
                    loader.file.then((file) => {
                        body.append("files", file);
                        // let headers = new Headers();
                        // headers.append("Origin", "http://localhost:3000");
                        fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
                            method: "post",
                            body: body
                            // mode: "no-cors"
                        })
                            .then((res) => res.json())
                            .then((res) => {
                                resolve({
                                    default: `${API_URL}/${res.filename}`
                                });
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    });
                });
            }
        };
    }
    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        };
    }

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
                    config={{
                        extraPlugins: [uploadPlugin]
                    }}
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