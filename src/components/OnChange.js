import { useState } from "react"
import { Link } from "react-router-dom"
var a=["Try","Try1"]
function Change(){
    var [x,setX]=useState("")
    function handleChange(e){
        console.log("changing")
        console.log(e.target.value)
        setX(e.target.value)
    }
    return(
        <div>
            <h1>hello onchange</h1>
            <input  onChange={handleChange}  ></input>
            <div>you entered this:{x}  </div>
            <button>cllick me</button>
            <div>Go tot tru</div>
            <div>Go tot try1</div>
            {
                a.map((data)=>{
                    return(
                        <Link to={data} ><button>Go to {data}</button></Link>

                    )
                })
            }
            <div ></div>
        </div>
    )
}
export default Change;

// input lo vunna data ni oka varaiable lo store chestham

// task1-->  div container & button %input  -->opnChange,onClick two states container stylings
