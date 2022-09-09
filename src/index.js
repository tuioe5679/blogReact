import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Main from './page/main';
import Board from './page/Board'
import Write from './page/write';
import Login from "./page/Login";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="board/:boardId" element={<Board/>} />
      <Route path="write" element={<Write />} />
      <Route path="login" element={<Login/>} />
      <Route path="*" element={<Main />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);