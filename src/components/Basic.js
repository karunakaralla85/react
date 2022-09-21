//js+html

// return lopla function

import { useState } from 'react';
import './basic.css'
// var a=100;
function Basic(){
    var [x,setX]=useState(100);
    
        function handleInc(){
            console.log("clicking")
            // setX(x-1);
            setX(x+1);
            // a=a+1
        }
        function handledec(){
            console.log("clicking")
            setX(x-1);
            // setX(x+1);
            // a=a+1
        }
    return(
        <div>
            <div>value of x is {x}</div>
            <h1 className='header' >hello basic</h1>
            <button   onClick={handleInc} >increment me</button><br></br>
            <button   onClick={handledec} >decrement me</button>
            <div>value of x is {x}</div>
        </div>
    )
}
export default Basic;

// Basic();

// state variables

// normal variables


// function callll how many times only one time





// state variables  


// state function used to upadte state variable



// -->revise
// -->decrement


// --->two buttons increment decrement

// --->width:300,height:300  --->button click we have to hide                 (we have to hide the container display:"none")


// --->container width:300,height:300 buttton clcik -->width+50