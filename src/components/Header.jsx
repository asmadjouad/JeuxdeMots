import React from "react";
import * as ReactBootStrap from "react-bootstrap";
const Header = () => {
  return (
    <ReactBootStrap.Navbar
     className="header"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <ReactBootStrap.Navbar.Brand href="#home">
        <img
          className="img"
          src="http://www.jeuxdemots.org/logo-jdm/Logo_JDMrect_fond_transp.png"
          width="300"
          height="50"
          alt=""
        />
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          {/* <ReactBootStrap.Nav.Link href="#features">Classement</ReactBootStrap.Nav.Link>
           */}
          {/* <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
    </ReactBootStrap.NavDropdown>*/}
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
        {/*  <ReactBootStrap.Nav.Link href="#deets">
            Features
  </ReactBootStrap.Nav.Link>*/}
          <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
            A propos
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}

export default Header;
