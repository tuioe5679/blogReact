import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./component/Header";
import "../css/board.css"

function Board(boardId) {
    const [boardItem, setBoardItem] = useState([]);

    useEffect(() => {
        if (boardItem == "") {
            axios.get('http://localhost:8080/board/' + boardId).then((response) => {
                setBoardItem(response.data);
            }).catch(err => console.log(err))
        }
    });

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