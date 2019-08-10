import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import '../styles/MyNav.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class MyNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            name: props.name,
            linkedin: props.linkedin,
            github: props.github
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {

        return (
            <div>
                <Navbar fixed="top" color="dark" expand="md">
                    <NavbarBrand href="/">{this.state.name}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="bar-item" href={this.state.linkedin} target="_blank">Linkedin</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="bar-item" href={this.state.github} target="_blank">GitHub</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="bar-item" href="../src/data/Resume.pdf" target="_blank">Resume</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MyNav;