import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import image from "./bag.png"
import {useHistory} from "react-router-dom";

const Header = () => {
    const history = useHistory()

    return (
        <React.Fragment>
            <Navbar variant={"light"} className={"bg-light shadow p-3"} expand="lg">
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
                    <Nav.Item className={"w-50"}>
                        <div className="input-group">
                            <input type="text" className="form-control form-control-lg small"
                                   placeholder="Search for products, brands and more"/>
                            <button type="submit" className="input-group-text btn-dark" style={{
                                'outline': 'none ! important',
                                'box-shadow': 'none'
                            }}>
                                <i className="bi bi-search me-2"/> Search
                            </button>
                        </div>
                    </Nav.Item>

                    <Nav.Item className="border-left pl-2 ml-auto">
                        <Nav.Link onClick={() => history.push('/cart')}>
                            <img src={image} height={40} alt={"Bag"}/>
                        </Nav.Link>
                    </Nav.Item>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;