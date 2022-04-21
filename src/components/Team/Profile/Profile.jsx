import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
    return (
        <>
            <section className="single_team_page">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='team-single_wrapper'>
                                <div className="team-info_icons">
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
                                <div className="team-image_wrap">
                                    <div className="team-image">
                                        <img src="https://seofy.wgl-demo.net/wp-content/uploads/2018/11/team_1-420x460.jpg" className='img-fluid' alt="Team Name" />
                                    </div>
                                </div>
                                <div className="team-info_wrapper">
                                    <h2>Mark Liuw</h2>
                                    <div className="team-info_item team-department">
                                        <h5>Skill:</h5>
                                        <span>General Manager</span>
                                    </div>
                                    <div className="team-info_item">
                                        <h5>Eamil:</h5>
                                        <span>General Manager</span>
                                    </div>
                                    <div className="team-info_item">
                                        <h5>Phone:</h5>
                                        <span>General Manager</span>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default Profile;