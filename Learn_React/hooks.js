import React, { useState } from 'react';


function App() {
let[count,setCount]=useState(0);
let inst=()=>{
  setCount(count++);
console.log("working ");
}
  return (
    <>
    <h1>{count}</h1>
    <button onClick={inst}>click me </button>
    </>
  );
}

export default App;
