import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import App from './page/App';
import Main from './page/main';
import Write from './page/write';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="write" element={<Write />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);