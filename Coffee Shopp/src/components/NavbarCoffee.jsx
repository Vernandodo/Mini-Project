import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Form } from "react-bootstrap";

const NavbarCoffee = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Perform search logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <strong>Nando</strong> Coffeee
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="#pricing"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarCoffee;
