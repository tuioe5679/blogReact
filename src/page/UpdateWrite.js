import { Editor } from '@toast-ui/react-editor';
import { useNavigate } from 'react-router';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Prism from 'prismjs';
import Axios from 'axios';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import Header from './component/Header';
import '../css/write.css';
import { useEffect } from 'react';

function Writer() {

    const { boardId } = useParams();

    const editorRef = useRef();

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

    const onChangeEditorText = () => {
        const data = editorRef.current?.getInstance().getMarkdown();
        setBoard({
            ...Board,
            content: data
        })
    }

    const submitPosting = () => {
        Axios.put('http://localhost:8080/board/' + boardId , {
            title: Board.title,
            content: Board.content
        }).then(() => {
            alert('변경 완료');
        })
        navigate('/main');
    }

    useEffect(() => {
        Axios.get('http://localhost:8080/board/' + boardId).then((response) => {
            setBoard(response.data);
        })
    }, []);

    return (
        <div>
            <Header></Header>
            <div className='write-container'>
                <div className='title'>
                    <input className='title-input' type='text' value={Board.title} placeholder='  제목을 입력' onChange={getValue} name='title' />
                </div>
                <div className='write-editor'>
                    {Board.content &&
                        <Editor
                            ref={editorRef}
                            previewStyle='vertical'
                            height='600px'
                            initialValue={Board.content}
                            onChange={onChangeEditorText}
                            useCommandShortcut={false}
                            plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
                        />}
                </div>
            </div>
            <div className='Button'>
                <button className='cancel-btn'>취소</button>
                <button className='submit-btn' onClick={submitPosting}>글쓰기</button>
            </div>
        </div>
    );
}

export default Writer