import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardText,
    CardBody,
    CardTitle, 
    Button} from 'reactstrap';
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
                            <WinningProjectCard
                                link="https://devpost.com/software/newtral-the-neutral-news-filter"
                                title="Newtral - The Neutral News Filter"
                                organization="HackUTD Fall 2019"
                                date="Novemeber 2019"
                                award="Sponsor Prize for Cognizant, Top 5 Overall"
                                description="Implemented a chrome extension which scans news articles and highlights objective lines and trikes subjective lines of the article based on the emotional threshold using a custom API"
                                contribution="Developed the back-end using Python with NLP to analyze text and create API data and GCP to host the API server"
                            />
                            <WinningProjectCard
                                link="https://devpost.com/software/spacefinder"
                                title="SpaceFinder"
                                organization="HackUTD Spring 2019"
                                date="February 2019"
                                award="Third Place Overall"
                                description="Implemented a mobile application which lets students find and check-in to empty study rooms and study groups across the campus"
                                contribution="Developed the front-end of the web app tool using HTML, CSS and JavaScript"
                            />
                            <WinningProjectCard
                                link="https://devpost.com/software/dfw-dtw"
                                title="DFW DTW"
                                organization="HackDFW 2019"
                                date="February 2019"
                                award="Sponsor Prize for Dallas Regional Chamber’s Say Yes to Dallas Campaign Challenge"
                                description="Implemented a web tool which provides personalized recommendations in the DFW area to users based on their interests and jobs"
                                contribution="Developed the front-end of the web tool using HTML, CSS, PHP and JavaScript"
                            />
                        </Row>
                        <Row className="row-padding">
                            <Col sm={{ size: 6, offset: 3 }}>
                                <ProjectsLink/>
                            </Col>
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

function ProjectsLink() {
    return (
        <div>
            <Button>More Projects >>> </Button>
        </div>
    )
}

function WinningProjectCard(props) {
    return (
        <Col sm={{ size: 4 }}  className="card-padding">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
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