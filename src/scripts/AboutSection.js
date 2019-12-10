// /src/components/AboutSection.js
import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardText,
    CardBody,
    CardTitle } from 'reactstrap';
import '../styles/AboutSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import CardDeck from "reactstrap/es/CardDeck";

class AboutSection extends Component {
    render() {
        return (
            <div className="about-section">
                <div className="block-padding grey-section">
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ size: 6, offset: 3 }}>
                                <AboutCardTitle/>
                                <hr></hr>
                                <AboutCardContent/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

function AboutCardTitle(props) {
    return (
        <div>
            <h2>about me</h2>
        </div>
    );
}

function AboutCardContent(props) {
    return (
        <div>
            <h4>
                I am a sophomore at The University of Texas at Dallas, and I am currently majoring in Software Engineering.
                I also have experience in front end web development, Android app development, and cybersecurity.
                I hope to find opportunities where I can gain exposure to algorithm and project design.
                My ultimate aim is to develop futuristic products for users because
                I am inspired by the impact of computing on society.
            </h4>
        </div>
    );
}

export default AboutSection;