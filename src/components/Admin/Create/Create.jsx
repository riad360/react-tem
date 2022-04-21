import React from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Create.css';

const Create = () => {
    return (
        <>
            <section className='create-wrap my-5'>
                <Container>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type='text' placeholder='Enter Name'></Form.Control>
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Skill</Form.Label>
                                            <Form.Control type='text' placeholder='Enter Skill'></Form.Control>
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type='email' placeholder='Enter Email'></Form.Control>
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Facebook</Form.Label>
                                            <Form.Control type='text' placeholder='Enter Facebook url'></Form.Control>
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Twitter</Form.Label>
                                            <Form.Control type='text' placeholder='Enter Twitter url'></Form.Control>
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Linkedin</Form.Label>
                                            <Form.Control type='text' placeholder='Enter Linkedin url'></Form.Control>
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Avater</Form.Label>
                                            <Form.Control type='file'></Form.Control>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className='w-100'>
                                            Create New Team
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Create;