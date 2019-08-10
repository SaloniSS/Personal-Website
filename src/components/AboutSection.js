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
                        <Row className="row-padding">
                            <AboutCard
                                icon="fa fa-university"
                                title="Education"
                                date = "Graduating December 2021"
                                text="Bachelor of Science in Software Engineering
                                The University of Texas at Dallas"/>
                            <AboutCard
                                icon="fa fa-briefcase"
                                title="Logistics Lead, The University of Texas at Dallas"
                                date = "March 2019 - Present"
                                text="Responsible for planning, coordination, execution and supervision of conferences,
                                workshops,and summer camps held on campus as a part of the Office for Computer Science
                                Education and Outreach"/>
                            <AboutCard
                                icon="fa fa-briefcase"
                                title="Computer Science Instructor, The University of Texas at Dallas"
                                date = "February 2019 - Present"
                                text="Conducted private tutoring and coding club sessions for students from elementary
                                school to high school in topics of programming languages and introductory computer
                                science principles as a part of the Office for Computer Science Education and Outreach"/>
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
                Recently I have become very interested in algorithms, cybersecurity and project design.
                My ultimate aim is to develop futuristic products for users because
                I am inspired by the impact of computing on society.
            </h4>
        </div>
    );
}

function AboutCard(props) {
    return (
        <Col sm={{ size: 4 }}>
            <Card className="about-card">
                <CardBody>
                    <i className={props.icon}></i>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.text}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

export default AboutSection;