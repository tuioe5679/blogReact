import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./component/Header";
import { useNavigate } from 'react-router';
import "../css/board.css"

function Board(boardId) {
    const navigate = useNavigate();
    const [boardItem, setBoardItem] = useState([]);
    const [commentItem, setCommentItem] = useState({
        content: ''
    });

    useEffect(() => {
        if (boardItem == "") {
            Axios.get('http://localhost:8080/board/' + boardId).then((response) => {
                setBoardItem(response.data);
            }).catch(err => console.log(err))
        }
    });

    const getValue = e => {
        const { name, value } = e.target;

        setCommentItem({
            ...commentItem,
            [name]: value
        })
    };

    const submitCommentPosting = () => {
        Axios.post('http://localhost:8080/comment', {
            content: commentItem.comment
        }).then(() => {

            alert('등록 완료');
        })
        navigate('/board' + boardId);
    }

    const element = boardItem.content;

    const board = (<>
        <div>
            <Header></Header>
            <div className="board-item">
                <h2>{boardItem.title}</h2>
                <div>{boardItem.nickname}</div>
                <div>{boardItem.date}</div>
                <hr></hr>
                <div dangerouslySetInnerHTML={createMarkup(element)} />
            </div>
            <input className='comment-input' type='text' placeholder='댓글 입력'
                onChange={getValue} name='comment' />
            <button className="comment-submit-btn" onClick={submitCommentPosting}>댓글 쓰기</button>
        </div></>)

    return board;
}

function createMarkup(element) {

    return { __html: element };
}

function BoardView() {
    let { boardId } = useParams();
    const item = Board(boardId);

    return (<>
        <div>
            {item}
        </div>
    </>)
}

export default BoardView;