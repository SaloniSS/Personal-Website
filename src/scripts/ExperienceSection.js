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
import '../styles/ExperienceSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import CardDeck from "reactstrap/es/CardDeck";

class ExperienceSection extends Component {
    render() {
        return (
            <div className="experience-section">
                <div className="block-padding grey-section">
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ size: 6, offset: 3 }}>
                                <ExperienceCardTitle/>
                            </Col>
                        </Row>
                        <Row className="row-padding">
                            <EducationCard
                                icon="fa fa-university"
                                title="Education"
                                date = "Graduating December 2021"
                                degree="BSc"
                                major="Software Engineering"
                                university="The University of Texas at Dallas"
                                concentration="Information Assurance"
                                honors = "Collegium V Scholar, Hobson Wildenthal Honors College"
                                scholarship = "Academic Excellence Scholar"
                                />
                            <ExperienceCard
                                icon="fa fa-briefcase"
                                position="Logistics Lead"
                                employer="The University of Texas at Dallas"
                                date = "March 2019 - August 2019"
                                description="Responsible for planning, coordination, execution and supervision of conferences,
                                workshops,and summer camps held on campus as a part of the Office for Computer Science
                                Education and Outreach"/>
                            <ExperienceCard
                                icon="fa fa-briefcase"
                                position="Computer Science Instructor"
                                employer="The University of Texas at Dallas"
                                date = "February 2019 - August 2019"
                                description="Conducted private tutoring and coding club sessions for students from elementary
                                school to high school in topics of programming languages and introductory computer
                                science principles as a part of the Office for Computer Science Education and Outreach"/>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

function ExperienceCardTitle(props) {
    return (
        <div>
            <h2>Education and Work Experience</h2>
        </div>
    );
}

function ExperienceCard(props) {
    return (
        <Col sm={{ size: 4 }}>
            <Card className="about-card">
                <CardBody>
                    <i className={props.icon}></i>
                    <CardTitle>{props.position}</CardTitle>
                    <CardTitle>{props.employer}</CardTitle>
                    <CardText>{props.date}</CardText>
                    <CardText>{props.description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

function EducationCard(props){
    return (
        <Col sm={{ size: 4 }}>
            <Card className="about-card">
                <CardBody>
                    <i className={props.icon}></i>
                    <CardTitle>{props.degree} , {props.major}</CardTitle>
                    <CardTitle>{props.university}</CardTitle>
                    <CardText>{props.date}</CardText>
                    <CardText>Concentration : {props.concentration}</CardText>
                    <CardText>{props.honors}</CardText>
                    <CardText>{props.scholarship}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

export default ExperienceSection;