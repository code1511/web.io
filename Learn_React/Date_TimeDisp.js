import React from 'react'

export default function App() {
  const dt=new Date().toLocaleDateString();
  const tm=new Date().toLocaleTimeString();

  return (
   <>
 <div className="back" >
     <div className="form1">
       <h1>Reg Form</h1>
       <h2>current date is = {dt} </h2>
       <h2>time is = {tm}</h2>
     </div>
   </div>
   </>
  )
}
