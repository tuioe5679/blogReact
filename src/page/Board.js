import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Board(boardId) {
    const [boardItem, setBoardItem] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/board/' + boardId).then((response) => {
            setBoardItem(response.data);
            console.log(response.data)
        }).catch(err => console.log(err))
    });

    const element = boardItem.content;

    const board = (<>
    <div>
        게시글 상세내용
        <div className="board-item">
            <div>{boardItem.idx}</div>
            <div>{boardItem.title}</div>
            <div>{boardItem.nickname}</div>
            <div dangerouslySetInnerHTML={createMarkup(element)}/>
            <div>{boardItem.date}</div>
        </div>
    </div></>)

    return board;
}

function createMarkup(element){
    return {__html: element};
}

function BoardView() {
    let { boardId } = useParams();
    const item = Board(boardId);
    console.log(boardId)

    return (<>
        <div>
            {item}
        </div>
    </>)
}

export default BoardView;