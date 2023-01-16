import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Dragon News</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#fetures">Fetures</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                        <NavDropdown className='d-lg-none' title="All Category" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <LeftSideNav></LeftSideNav>
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        {
                            (user?.email && user?.uid)
                                ?
                                <>
                                    <Nav.Link>{user?.displayName}</Nav.Link>
                                    <Nav.Link><Image height={30} roundedCircle src={user?.photoURL}></Image></Nav.Link>
                                    <Nav.Link><Button onClick={handleLogOut} variant="primary" size="sm">Log Out</Button></Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link><FaUser /></Nav.Link>
                                    <Nav.Link href='/login'><Button variant="primary" size="sm">Login</Button></Nav.Link>
                                    <Nav.Link href='/signup'><Button variant="outline-success" size="sm">Sign Up</Button></Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;