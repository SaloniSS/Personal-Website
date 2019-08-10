import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';
import '../styles/ProjectsSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProjectsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            github_username: props.github_username,
            projects: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('https://api.github.com/users/'+ this.state.github_username +'/repos')
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                else{
                    throw new Error("something went wrong...")
                }
            }).then(data => {
            this.setState({projects: data, isLoading: false});

        }).catch(error => {
            this.setState({error: error, isLoading: false})
        });
    }

    render() {
        const { projects, isLoading, error } = this.state;

        if(isLoading) {
            return (
                <div>
                    loading...
                </div>
            );
        }
        if(error) {
            return (
                <div>
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ size: 6, offset: 3 }}>
                                <ProjectCardTitle/>
                            </Col>
                        </Row>
                        <Row className="row-padding">
                            <h1>
                                An Error has occured please check your username in the app.js
                            </h1>
                        </Row>
                    </Container>
                </div>
            );
        }
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
                            { projects.map(function (project, i) {
                                return (
                                    <GithubCard project={ project } key={ i }/>
                                );
                            }.bind(this))}
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

function GithubCard(props) {
    return (
        <Col sm={{ size: 3 }} className="card-padding">
            <a href={props.project.html_url} target="_blank">
                <Card className="project-card">
                    <CardBody>
                        <CardTitle>{props.project.name}</CardTitle>
                        <CardText>{props.project.description}</CardText>
                    </CardBody>
                </Card>
            </a>
        </Col>
    )
}


export default ProjectsSection;