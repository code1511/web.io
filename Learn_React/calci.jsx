import React, { useState } from "react";
import pc12 from "./img/pc12.jpg";
function App() {
  return (
    <>
    <h1>Simple Calculator </h1>
      <div className="outer">
        <input type="text" />
        <div className="main_c">
          <button value="1" >1</button>
          <button value="2">2</button>
          <button value="3">3</button>
          <button value="+">+</button>

          <button value="4">4</button>
          <button value="5">5</button>
          <button value="6">6</button>
          <button value="-">-</button>

          <button value="7">7</button>
          <button value="8">8</button>
          <button value="9">3</button>
          <button value="*">*</button>

          <button value="clear">clear</button>
          <button value="0">0</button>
          <button value="=">=</button>
          <button value="%">%</button>
        </div>
      </div>
    </>
  );
}

export default App;
