import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
              <Nav.Link href="/trigger-1">Button</Nav.Link>
              <Nav.Link href="trigger-2">Form</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default BasicExample;