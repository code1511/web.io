import React, { useState } from "react";
export default function Myevent() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const myEvent = (event) => {
    const { value, name} = event.target;
    setFullName((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        };
      }
      else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      }
      else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      }
      else if (name === "phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
      }
    });
  };
  const onSub = (event) => {
    event.preventDefault();
    console.log(fullName.fname +" "+ fullName.lname+" "+fullName.email+" "+fullName.phone);
    alert("hello "+fullName.fname +" "+fullName.lname +" \n your email and number is : "+
    fullName.email+" "+fullName.phone
    );
  };

  return (
    <div>
      <h1>React form handling</h1>
      <form className="frm" onSubmit={onSub}>
        <h2>
          hello {fullName.fname} {fullName.lname}
        </h2>
        <p>{fullName.email} {fullName.phone}</p>
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
        <br /> <br />{" "}
        <input
          type="email"
          placeholder="enter email"
          name="email"
          value={fullName.email}
          onChange={myEvent}
        ></input>{" "}
        <br /> <br />{" "}
        <input
          type="number"
          placeholder="enter mobile number"
          name="phone"
          value={fullName.phone}
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
