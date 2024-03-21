import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Component = () => {

    return (
        <>
            <h4 style={{ paddingTop: "3vh" }}> Trigger Email</h4>
            <Container fluid style={{ width: "20vw", paddingTop: "5vh" }}>
                    <Row >
                        <Col style={{ paddingTop: "3vh" }}>
                            <Button variant="secondary" onClick={() => console.log("Click....Technically an email should have been sent")}>Generate Email</Button>
                        </Col>
                    </Row>


            </Container>
        </>


    );
}

export default Component;