import React, { useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./menuCard";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Container from "../../../node_modules/react-bootstrap/Container";
import Nav from "../../../node_modules/react-bootstrap/Nav";
import Navbar from "../../../node_modules/react-bootstrap/Navbar";
import NavDropdown from "../../../node_modules/react-bootstrap/NavDropdown";
const Restorant = () => {
  const [menuData, setMenuData] = useState(Menu);
  //const [MenuCard,setMenuData] = React.useState(Menu); one can also use this method to do use hooks
  return (
    <div className="row">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MenuCard menuData={menuData} />
    </div>
  );
};

export default Restorant;
