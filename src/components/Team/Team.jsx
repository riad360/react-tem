import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = () => {
    return (
        <section className='team-wrap my-5'>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className='box shadow-sm'>
                            <div className="team-img">
                                <img src="https://seofy.wgl-demo.net/wp-content/uploads/2018/11/team_1-420x460.jpg" className='img-fluid' alt="Team Name" />
                                <div className="social">
                                    <ul>
                                        <li>
                                            <a href='#'>
                                                <i class='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <i class='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <i class='bx bxl-linkedin'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content">
                                <h2><Link to={'/profile'}>Mark Liuw</Link></h2>
                                <p>General Manager</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Team;

// rafce