import React, { useState } from "react";
export default function Myevent() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });
  const myEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const val=event.target.value;
    const name=event.target.name;
    setFullName((preValue)=>{

     if(name=== 'fname'){
     return{
      fname:val,
      lname:preValue.lname,
     }
     }else if(name=== 'lname'){
      return{
       lname:val,
       fname:preValue.fname,
      }
      }
    })
  };
  const onSub = (event) => {
    event.preventDefault();
    console.log(fullName.fname+" "+fullName.lname);
    alert("submitted");
  };

  return (
    <div>
      <h1>React form handling</h1>
      <form className="frm" onSubmit={onSub}>
        <h2>hello {fullName.fname} {fullName.lname}!</h2>
        <input
          type="text"
          placeholder="enter data"
          name="fname"
          value={fullName.fname}
          onChange={myEvent}
        ></input>{" "}
        <br />
        <br />
        <input
          type="text"
          placeholder="enter last name"
          name="lname"
          value={fullName.lname}
          onChange={myEvent}
        ></input>{" "}
        <br /> <br />
        <button type="submit" onClick={onSub}>
          {" "}
          submit
        </button>
      </form>
    </div>
  );
}
