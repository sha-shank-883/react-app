import React, { useState } from "react";
// import Footer from "./Footer";

const Contact = () => {
  const [data, setData]= useState({
       fullname: "",
       phone: "",
       email: "",
       message: "",

  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
     setData((preVal) => {
        return {
          ...preVal,
          [name]: value,
        };
     });
     };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert( 
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.message}`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container Contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="name" className="form-control shadow" id="exampleFormControlInput1"
                 name="fullname"
                 value={data.fullname}
                 onChange={InputEvent}
                 placeholder="your name" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="phone" className="form-control shadow" id="exampleFormControlInput1" 
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="mobile number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control shadow" id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control shadow" id="exampleFormControlTextarea1" rows="3 " 
                 name="message"
                 value={data.message}
                 onChange={InputEvent}></textarea>
              </div>
              <div className="col-12 mb-5">
                <button className="btn btn-outline-primary shadow" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
