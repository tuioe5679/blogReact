import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Main from './page/main';
import Board from './page/board'
import Write from './page/write';
import Login from "./page/login";
import SingUp from "./page/singup";
import Admin from "./page/admin";
import UpdateWrite from "./page/updatewrite"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="board/:boardId" element={<Board />} />
      <Route path="write" element={<Write />} />
      <Route path="login" element={<Login />} />
      <Route path="singup" element={<SingUp />} />
      <Route path="admin" element={<Admin />} />
      <Route path="updateboard/:boardId" element={<UpdateWrite />} />
      <Route path="*" element={<Main />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);