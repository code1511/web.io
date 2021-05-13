import React from "react";

const curDate = new Date().getHours();
var greet = "";
const cssStyle={

 };
if (curDate < 12 && curDate > 1) {
  greet = "Good Morning";
 cssStyle.color='red';
} else if (curDate > 12 && curDate < 19) {
  greet = "Good Afternoon";
  cssStyle.color='white';

} else if (curDate > 18) {
  greet = 'Good Night';
  cssStyle.color='red';
}
const tm=new Date().toLocaleTimeString();
export default function App() {
  return (
    <>
      <div className="back">
        <div className="main">
          <h1>{tm}</h1>
          <h1>Hello <span style={cssStyle}> {greet} </span></h1>
        </div>
      </div>
    </>
  );
}
