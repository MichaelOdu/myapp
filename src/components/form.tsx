import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form"

const Component = () => {
    const { register, handleSubmit } = useForm({
        shouldUseNativeValidation: true,
    })
    const onSubmit = async (data: any) => {
        console.log("form data", data)
    }

    return (
        <>
            <h4 style={{ paddingTop: "3vh" }}> Schedule Email Form</h4>
            <Container fluid style={{ width: "50vw", paddingTop: "5vh" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>To Email Address:</Form.Label>
                                <Form.Control {...register("email")} type="email" placeholder="name@fwdthink.com" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Subject:</Form.Label>
                                <Form.Control {...register("subject")} placeholder="Email Subject" />
                            </Form.Group>

                
                        </Col>


                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Schedule Date</Form.Label>
                                <Form.Control {...register("sendDate")} type="datetime-local" placeholder="name@fwdthink.com" />
                            </Form.Group>

                        </Col>


                    </Row>
                    <Row >
                        <Col>
                            <Form.Group className="mb-3" >
                                <Form.Label>Email Content</Form.Label>
                                <Form.Control {...register("content")} as="textarea" rows={7} />
                            </Form.Group>

                        </Col>
                    </Row>
                    <Row >
                        <Col style={{ paddingTop: "5vh" }}>
                            <Button variant="secondary" type="submit">Submit</Button>
                        </Col>
                    </Row>


                </form>
            </Container>
        </>


    )


    // return (<>
    // <Container fluid>
    //     Hello World Form
    // </Container>
    // </>);

}

export default Component;

/* 
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br> */