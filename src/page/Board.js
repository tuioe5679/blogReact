import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import React, { useEffect, useState } from "react";
import { Viewer } from '@toast-ui/react-editor';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import Header from "./component/Header";
import Axios from "axios";
import "../css/board.css"

function BoardView() {
    const { boardId } = useParams();
    return (
        <div>
            {Board(boardId)}
        </div>
    )
}

function Board(boardId) {
    const navigate = useNavigate();
    const [boardItem, setBoardItem] = useState({});
    const [commentItem, setCommentItem] = useState([]);
    const [postCommentItem, setPostCommentItem] = useState({
        content: '',
        idx: ''
    });

    useEffect(() => {
        Axios.get('http://localhost:8080/board/' + boardId).then((response) => {
            setBoardItem(response.data);

        }).catch(err => console.log(err))

        Axios.get('http://localhost:8080/comment/' + boardId).then((response) => {
            setCommentItem(response.data);
        }).catch(err => console.log(err))
    }, []);

    const getValue = e => {
        const { name, value } = e.target;

        setPostCommentItem({
            ...postCommentItem,
            [name]: value
        })
    };

    const submitCommentPosting = () => {
        Axios.post('http://localhost:8080/comment', {
            content: postCommentItem.comment,
            idx: boardId
        }).then(() => {
            alert('등록 완료');
        })
        navigate('/board/' + boardId);
    }

    return (
        <div>
            <Header></Header>
            <div className="board-item">
                <h2>{boardItem.title}</h2>
                <div>{boardItem.nickname}</div>
                <div>{boardItem.date}</div>
                <hr></hr>
                <Viewer initialValue={boardItem.content}></Viewer>
            </div>
            <div className="comment">
                <input className='comment-input' type='text' placeholder='댓글 입력'
                    onChange={getValue} name='comment' />
                <button className="comment-submit-btn" onClick={submitCommentPosting}>댓글 쓰기</button>
            </div>
            <div className="comment_content">
                {commentItem.map(item =>
                    <div className="comment-item">
                        <div>{item.nickname}</div>
                        <div>{item.content}</div>
                        <div>{item.date}</div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BoardView;