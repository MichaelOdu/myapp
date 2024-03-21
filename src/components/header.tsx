import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

// function BasicExample() {
//     return (
//         <Navbar bg="dark" data-bs-theme="dark" expand="lg" style={{ display: "flex" }}>
//             <Container>
//                 <Row>
//                     <Col>
//                         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//                     </Col>
//                     <Col>
//                         <Nav>
//                             <Nav.Link href="#home">Home</Nav.Link>
//                             <Nav.Link href="#link">Link</Nav.Link>
//                         </Nav>

//                     </Col>
//                 </Row>

//                 {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

//             </Container>
//         </Navbar>
//     );
// }


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          FWDthink
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink style={{paddingRight: "1vw"}} to={"/button-trigger"}>Button</NavLink>
            <NavLink to={"/form-trigger"}>Form</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;