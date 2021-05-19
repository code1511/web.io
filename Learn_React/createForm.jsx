import React, { useState } from 'react'

export default function Myevent() {
    const [fullName,setFullName]=useState("");
    const [lastName,setLastName]=useState("");
    const [name,setName]=useState("");
    const [last,setN]=useState("");

    const onSub=(event)=>{
     event.preventDefault();
      setFullName(name);
      setLastName(last);
    }
    const myEvent=(event)=>{
        setName(event.target.value);
    }
   const myEventTwo=(event)=>{
       setN(event.target.value);
   }
    return (
        <div>
            <h1>React form handling</h1>
           <form className="frm" onSubmit={onSub} >
               <h2>hello {fullName} {lastName}!</h2>
               <input type="text" onChange={myEvent} value={name}></input> <br /> <br />
               <input type="text" onChange={myEventTwo} value={last}></input> <br /> <br />
               <button type="submit" onClick={onSub} > submit</button>
           </form>
        </div>
    )
}

