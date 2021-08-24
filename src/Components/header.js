import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import image from "./bag.png"
import {useHistory} from "react-router-dom";

const Header = () => {
    const history = useHistory()

    return (
        <React.Fragment>
            <Navbar variant={"light"} className={"bg-light shadow p-3 mb-5"} expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/">MEN</Nav.Link>
                            <Nav.Link href="/">WOMEN</Nav.Link>
                            <Nav.Link href="/">KIDS</Nav.Link>
                            <Nav.Link href="/">SELF-CARE</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Nav.Item className="border-left pl-2 ml-auto">
                    <Nav.Link onClick={() => history.push('/cart')}>
                        <img src={image} height={40} alt={"Bag"}/>
                    </Nav.Link>
                </Nav.Item>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;