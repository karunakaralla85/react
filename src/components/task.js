// import React from "react";
import { useState } from 'react';
import './task.css'
function Task(){
    var [x,setX]=useState("block")
    function handleChange(){
        console.log("clciking")
       setX("none")
    }
    function handleView(){
        setX("block")
    }
    return(
        <div>
        <h1>hello peolpe</h1>
        <div  style={{width:300,height:300,backgroundColor:'red',display:x}} ></div>
        <button   onClick={handleChange} >hidehide</button>
        <button   onClick={handleView} >view</button>
        </div>     
        // <div>
        //     <h1>hello hi</h1>
        //     <button  className='header'>click me to decreese</button>
        // </div>
    )
}
// var a=10;
// a=100;

// handle  ->only one button none blovk   hint-->if else
// routing


export default Task;