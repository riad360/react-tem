import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';

const Admin = () => {
    return (
        <>
            <section className='admin-wrap my-5'>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header className='d-flex justify-content-between'>
                                    <div className='text-left'>
                                        <h4 className='card-title'>Team List</h4>
                                    </div>
                                    <div className='text-right'>
                                        <a href="#" className='btn btn-info text-white'>Create New</a>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Skill</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Social</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>
                                                    <a href="#" className='btn btn-info text-white'><i class='bx bx-edit-alt'></i></a> &nbsp;
                                                    <a href="#" className='btn btn-danger'><i class='bx bxs-trash' ></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Admin;