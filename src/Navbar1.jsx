import React from "react";
import {NavLink ,} from "react-router-dom"
import {Nav , Navbar, Form,} from "react-bootstrap"
// import *as ReactBootStrap from "react-bootstrap";

const Navbar1 = () => {
    return (
      <>
      <Nav className="container-fluid nav_bg"  className="col-10 mx-auto"></Nav>
      <Navbar bg="" expand="lg">
  <Navbar.Brand to="/">Shashank Singhal</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
    <Nav className="ml-auto">

      <NavLink activeClassName="menu_active" exact className="nav-link active" to="/">Home</NavLink>
      {/* <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink> */}
      <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
      <NavLink activeClassName="menu_active" className="nav-link"  to="/service">Service</NavLink>
      <NavLink activeClassName="menu_active" className="nav-link"  to="/contact">Contact</NavLink>
    </Nav>
    <Form inline>
    </Form>
  </Navbar.Collapse>
</Navbar>
       
  </>
    );
  };
  
  export default Navbar1 ;
  