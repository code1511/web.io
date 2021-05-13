import React from 'react'

const curDate=new Date().getHours();
var greet="";
if(curDate <12 && curDate >1){
  greet="Good Morning";
}else if(curDate>12 &&curDate<20){
  greet="Good Afternoon";
}else if(curDate >20){
  greet="Good Night";
}
export default function App() {
  return (
   <>
 <div className="back" >
   <h2>{greet}</h2>
   </div>
   </>
  )
}
