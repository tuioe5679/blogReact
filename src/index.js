import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Main from './page/Main';
import Board from './page/Board'
import Write from './page/Write';
import Login from "./page/Login";
import SingUp from "./page/SingUp";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="board/:boardId" element={<Board />} />
      <Route path="write" element={<Write />} />
      <Route path="login" element={<Login />} />
      <Route path="singup" element={<SingUp />} />
      <Route path="*" element={<Main />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);