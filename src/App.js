import React,{ useState } from 'react';
import './App.css';

function App() {

  //destructuring 문법 

  //데이터,데이터 변경함수  
  let [title,titlechange] = useState(['TypeScript에 대해서 알아보자','Spring Framwork란?']);
  let [content,contentchange] = useState(['타입스크립트는 JavaScript에서 발전한 문법 입니다 ',"스프링은 Java의 백엔드 프레임워크입니다 "])
  return (
    <div className="App">
      <div className="black-nav">
        <div>기술 Blog</div>
      </div>
      <div className='list'>
        <h3> { title[0] }</h3>
        <a style={ {fontSize : '12px'}}>{content[0]}</a>
        <p>2022-08-17</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { title[1] }</h3>
        <a style={ {fontSize : '12px'}}>{content[1]}</a>
        <p>2022-08-17</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { title[0] }</h3>
        <a style={ {fontSize : '12px'}}>{content[0]}</a>
        <p>2022-08-17</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { title[1] }</h3>
        <a style={ {fontSize : '12px'}}>{content[1]}</a>
        <p>2022-08-17</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
