import { Editor } from '@toast-ui/react-editor';
import { useNavigate } from 'react-router';
import { useRef, useState } from 'react';
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

function Writer() {

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

    const editorRef = useRef();

    const navigate = useNavigate();

    const onChangeEditorText = () => {
        const data = editorRef.current?.getInstance().getMarkdown();
        setBoard({
            ...Board,
            content: data
        })
    }

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
        <div>
            <Header></Header>
            <div className='write-container'>
                <div className='title'>
                    <input className='title-input' type='text' placeholder='제목을 입력' onChange={getValue} name='title' />
                </div>
                <div className='write-editor'>
                    <Editor
                        ref={editorRef}
                        previewStyle='vertical'
                        height='600px'
                        initialValue=''
                        onChange={onChangeEditorText}
                        useCommandShortcut={false}
                        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
                    />
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