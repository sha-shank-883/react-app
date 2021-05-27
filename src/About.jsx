import React from "react";
// import { NavLink } from "react-router-dom";
import web from "../src/images/www.png";
// import web from "../src/images/www1.jpg";
import Common from "./Common";
// import BG from "../src/images/home.jpg";
const About = () => {
  return (
    <>
    <Common 
    name='Welcome to About page' 
    imgsrc={web}
    visit="/contact"
     btname="contact now"
      />
    </>
  );
};

export default About;
