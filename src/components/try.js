import { useState } from "react"
var coursesData=["html","css","js"]
function Try()
{
    var[x,setX]=useState("block")
    function checking()
    {
        // setX("none")
        console.log(x)
        if(x=='none')
        {
            setX("block")
        }
        else{
            setX('none')
        }
    }
    return(
        
        <div>
            <h1>hello there</h1>
            <div style={{width:30,height:30,backgroundColor:'red',display:x}}></div>
            <button onClick={checking}>click me</button>
            <div> value{x}</div>
            {
                x=="block"?<div>Present the block is visble</div>:<div>the block is not visible</div>
                
             }
            <div>
                {
                    coursesData.map(function(data){
                        return(
                            <div>{data=="js"?"":data}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Try;
//mapping
// conditional rendering/