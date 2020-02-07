import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardText,
    CardBody,
    CardTitle } from 'reactstrap';
import '../styles/ProjectsSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class ProjectsSection extends Component {
    render() {
        return (
            <div className="Projects-section">
                <div className="block-padding grey-section">
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ size: 6, offset: 3 }}>
                                <ProjectCardTitle/>
                            </Col>
                        </Row>
                        <Row className="row-padding">
                            <ProjectCard
                                link="http://github.com/acm-projects/langbot"
                                title="LangBot"
                                organization="UTD ACM Projects Fall 2019"
                                date="September 2019 – Present"
                                description="Implementing a chatbot that is trained to teach people how to read, write, understand and speak a new language"
                                contribution="Developing the back-end using JavaScript in React Native with DialogFlow, FireBase and GCP Translation"
                            />
                            <WinningProjectCard
                                link="http://github.com/SaloniSS/Newtral"
                                title="Newtral - The Neutral News Filter"
                                organization="HackUTD Fall 2019"
                                date="Novemeber 2019"
                                award="Sponsor Prize for Cognizant, Top 5 Overall"
                                description="Implemented a chrome extension which scans news articles and highlights objective lines and trikes subjective lines of the article based on the emotional threshold using a custom API"
                                contribution="Developed the back-end using Python with NLP to analyze text and create API data and GCP to host the API server"
                            />
                            <ProjectCard
                                link="https://github.com/SaloniSS/Sense-Your-Own-Adventure"
                                title="Sense Your Own Adventure"
                                organization="HackUNT 2019"
                                date="April 2019"
                                description="Implemented a web game which teaches visually impaired and dyslexic people touch typing using a auditory-immersed experience in the form of a story"
                                contribution="Developed the front end using React and the database using MongoDB in the form of a binary tree"
                            />
                            <WinningProjectCard
                                link="https://github.com/SaloniSS/Space-Finder"
                                title="SpaceFinder"
                                organization="HackUTD Spring 2019"
                                date="February 2019"
                                award="Third Place Overall"
                                description="Implemented a mobile application which lets students find and check-in to empty study rooms and study groups across the campus"
                                contribution="Developed the front-end of the web app tool using HTML, CSS and JavaScript"
                            />
                            <WinningProjectCard
                                link="https://github.com/SaloniSS/DFW-FTW"
                                title="DFW DTW"
                                organization="HackDFW 2019"
                                date="February 2019"
                                award="Sponsor Prize for Dallas Regional Chamber’s Say Yes to Dallas Campaign Challenge"
                                description="Implemented a web tool which provides personalized recommendations in the DFW area to users based on their interests and jobs"
                                contribution="Developed the front-end of the web tool using HTML, CSS, PHP and JavaScript"
                            />
                            <ProjectCard
                                link="https://github.com/SaloniSS/TheraTracker"
                                title="TheraTracker"
                                organization="TAMUhack 2019"
                                date="February 2019"
                                description="Designed an Android mobile application which helps patients keep track of mood changes and medication and connect their data to their doctor as a team of four"
                                contribution="Implemented a password-less login that used pre-verified user fingerprint using Firebase. Developed an emotion-detecting function which detects the users’ mood from their selfie using Microsoft Azure"
                            />
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

function ProjectCardTitle(props) {
    return (
        <div>
            <h2>Projects</h2>
        </div>
    );
}

function ProjectCard(props) {
    return (
        <Col sm={{ size: 4 }} className="card-padding">
            <a href={props.link} target="_blank">
                <Card className="project-card">
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardTitle>{props.organization}</CardTitle>
                        <CardText>{props.date}</CardText>
                        <CardText>{props.description}</CardText>
                        <CardText>{props.contribution}</CardText>
                    </CardBody>
                </Card>
            </a>
        </Col>
    );
}

function WinningProjectCard(props) {
    return (
        <Col sm={{ size: 4 }}  className="card-padding">
            <a href={props.link} target="_blank">
                <Card className="project-card">
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardTitle>{props.organization}</CardTitle>
                        <CardText>{props.date}</CardText>
                        <CardText> <u>Winner : {props.award}</u></CardText>
                        <CardText>{props.description}</CardText>
                        <CardText>{props.contribution}</CardText>
                    </CardBody>
                </Card>
            </a>
        </Col>
    );
}

export default ProjectsSection;