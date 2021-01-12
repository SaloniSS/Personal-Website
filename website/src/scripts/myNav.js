import React, { useState} from 'react';
import { Link } from 'react-router-dom';
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

const MyNav = (props) => {
    const [isOpen , setIsOpen ] = useState(false);
    
    const name = props.name;
    const linkedin = props.linkedin;
    const github = props.github;
    const devpost = props.devpost;
    const resume = props.resume;

    return (
        <div>
            <Navbar fixed="top" color="dark" expand="md" dark>
                <NavbarBrand href="/" >{name}</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="bar-item" href={linkedin} target="_blank">Linkedin</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="bar-item" href={github} target="_blank">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="bar-item" href={devpost} target="_blank">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="bar-item" href={resume} target="_blank" rel="noopener noreferrer">Résume</NavLink>
                        </NavItem>
                        <NavItem>
                            <Link to ='/projects' >
                                <NavLink className="bar-item" href="" target="_blank">Projects</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default MyNav;