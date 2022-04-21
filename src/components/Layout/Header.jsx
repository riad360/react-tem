import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <Nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://devshadman.me/wp-content/uploads/2022/03/devshadman-logo462x112.svg" className='logo' alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link"> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/admin'}>Admin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </>

    )
}

export default Header;