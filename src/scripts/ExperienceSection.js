import React from 'react';
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

const ExperienceSection = () => {

    const ExperienceCard = (experience) => {
        return (
            <Col sm={{ size: 4 }} className="card-padding">
                <Card className="about-card">
                    <CardBody>
                        <i className={experience.icon}></i>
                        <CardTitle>{experience.position}</CardTitle>
                        <CardTitle>{experience.employer}</CardTitle>
                        <CardText>{experience.date}</CardText>
                        <CardText>{experience.description}</CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    };

    const EducationCard = (education) => {
        return (
            <Col sm={{ size: 4 }} className="card-padding">
                <Card className="about-card">
                    <CardBody>
                        <i className={education.icon}></i>
                        <CardTitle>{education.degree} , {education.major}</CardTitle>
                        <CardTitle>{education.university}</CardTitle>
                        <CardText>{education.date}</CardText>
                        <CardText>Concentration : {education.concentration}</CardText>
                        <CardText>{education.honors}</CardText>
                        <CardText>{education.scholarship}</CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    };
    
    return (
        <div className="experience-section">
            <div className="block-padding grey-section">
                <Container>
                    <Row className="row-padding">
                        <Col sm={{ size: 6, offset: 3 }}>
                            <div>
                                <h2>Education and Work Experience</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <EducationCard
                            icon="fa fa-university"
                            title="Education"
                            date = "Graduating May 2021"
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
    );
};

export default ExperienceSection;