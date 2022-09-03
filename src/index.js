import { render } from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import App from './App';
import Main from './main';
import Write from './write';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="main" element={<Main />} />
      <Route path="write" element={<Write />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);