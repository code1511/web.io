import React, { useState } from 'react'

 function Myevent() {
    const cl="#006f78";
    const vl="tap me";
    const [bg,setBg]=useState(cl);
    const[name,setName]=useState(vl);
     const chng=()=>{
        let nBg="red";
        let nName="clicked 😀";
        setBg(nBg);
        setName(nName);
     }
     const fn=()=>{
         let newBg="yellow";
         let newName="go away 😐";
         setBg(newBg);
         setName(newName);
     }
    return (
        <div style={{backgroundColor:bg}}>
          <button onClick={chng} onDoubleClick={fn}>{name}</button>
        </div>
    )
}
export default Myevent;
