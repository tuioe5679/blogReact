/* eslint-disable */
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'html-react-parser';
import './App.css';

function App() {

  const [Content, setConent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([])

  const getValue = e => {
    const { name, value } = e.target;
    setConent({
      ...Content,
      [name]: value
    })
    console.log(Content)
  };

  return (
    <div className="App">
      <h1>Blog</h1>
      <div className='blog-container'>
        {viewContent.map(element =>
          <div>
            <h2>{element.title}</h2>
            <div>
              {ReactHtmlParser(element.content)}
            </div>
          </div>
        )}
      </div>
      <div className='form-wrapper'>
        <input className='title-input' type='text' placeholder='제목' onChange={getValue}
          name='title' />
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={editor => {
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setConent({
              ...Content,
              content: data
            })
            console.log(Content);
          }}
          onBlur={(event, editor) => {
          }}
          onFocus={(event, editor) => {
          }}
        />
      </div>
      <button className='submit-btn'
        onClick={() => {
          setViewContent(viewContent.concat({ ...Content }));
        }}>글쓰기</button>
    </div>
  );
}

export default App;
