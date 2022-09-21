import { useState } from "react"

function Try1() {
    var[x,setX]=useState("")
    var[y,sety]=useState("red")
    function clicking(e)
    {
        // console.log(e)
        console.log(e.target.value)
        setX(e.target.value)
    }
    function Clicking2()
    {
        console.log("button")
        sety(x)
    }
    return(

        <div>
            <input onChange={clicking} style={{backgroundColor:x}}></input>
            {/* <button onClick={Clicking2} style={{backgroundColor:y}}>click me to change</button> */}
            <div style={{height:30,width:30,backgroundColor:y}}></div>
        </div>
    )
}
export default Try1