import React,{ Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Basic from './components/Basic'
import Task from './components/task'
import Inc from './components/Inc';
import Change from './components/OnChange';
// import Try from './components/try';
import Try1 from './components/try1';
import { Route, Routes } from 'react-router-dom';
import Try from './components/try';
function App(){
  var [x,setX]=useState("hello i am from app.js")
    return (
      <div>

      <Routes>
        <Route path="/"  element={<Change/>} ></Route>
        <Route path="/Try" element={<Try/>} ></Route>
        <Route path="/Try1" element={<Try1/>} ></Route>
      </Routes>

        {/* <h1>hello world</h1> */}
        {/* <Greet/>
        <Basic/>
        <Task/> */}
        {/* <Inc/> */}
        {/* <Change/> */}
        {/* <Try1 /> */}
        {/* <Try/> */}
      </div>
    // <div className="App">
    //   <Greet />
    // </div>
    );
      }
export default App;
// work flow

// index.html-->index.js-->we are calling App

// App will return a html document

// html code will insert into div container