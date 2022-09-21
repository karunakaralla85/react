import { useState } from "react";

function Inc(){
    var [x,setX]=useState(300)
    function handleClick(){
        setX(x+30)

    }
    return (
        <div>
            <h1>Hello inc</h1>
        <div  style={{width:x,height:300,backgroundColor:'red'}} ></div>
    <button onClick={handleClick} >Inc</button>
        </div>
    )
}
export default Inc;