import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.js'
import Images from './Images.js';
import Content from './Content.js';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Main(){
  return (
    <div>
      <Navbar/>
      <Images />
      <Content />
    </div>
  )
}

ReactDOM.render(<Main/>, document.getElementById('root'))