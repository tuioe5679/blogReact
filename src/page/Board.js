import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./component/Header";
import { useNavigate } from 'react-router';
import "../css/board.css"

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

function Board(boardId) {
    const navigate = useNavigate();
    const [boardItem, setBoardItem] = useState([]);
    const [commentItem, setCommentItem] = useState([]);
    const [postCommentItem, setPostCommentItem] = useState({
        content: ''
    });

    useEffect(() => {
        if (boardItem == "") {
            Axios.get('http://localhost:8080/board/' + boardId).then((response) => {
                setBoardItem(response.data);
                console.log(response.data);
            }).catch(err => console.log(err))
        }
        //else if (commentItem == "") {
        Axios.get('http://localhost:8080/comments').then((response) => {
            setCommentItem(response.data);

        }).catch(err => console.log(err))
        //}
    });

    const getValue = e => {
        const { name, value } = e.target;

        setPostCommentItem({
            ...postCommentItem,
            [name]: value
        })
    };

    const submitCommentPosting = () => {
        Axios.post('http://localhost:8080/comment', {
            content: postCommentItem.comment
        }).then(() => {

            alert('등록 완료');
        })
        navigate('/board/' + boardId);
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
            <div className="comment-item">
                {commentItem.map(item =>
                    <div>
                        <div>{item.content}</div>
                        <div>{item.nickname}</div>
                        <div>{item.date}</div>
                        <hr></hr>
                    </div>
                )}
            </div>
        </div></>)

    return board;
}



export default BoardView;