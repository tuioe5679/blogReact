import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { createRef, useRef, useState } from 'react';
import Axios  from 'axios';
import { useNavigate } from 'react-router';


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
            <input className='title-input' type='text' placeholder='제목을 입력' onChange={getValue} name='title' />
            <Editor
                ref={editorRef}
                previewStyle='vertical'
                height='80vh'
                initialValue='마크다운'
                onChange={onChangeEditorText}
                useCommandShortcut={false}
                plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
            />
            <div className='Button'>
                <button className='cancel-btn'>취소</button>
                <button className='submit-btn' onClick={submitPosting}>글쓰기</button>
            </div>
        </div>
    );
}

export default Writer