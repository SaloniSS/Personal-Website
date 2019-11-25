// /src/components/SkillsSection.js
import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardText,
    CardBody,
    CardTitle } from 'reactstrap';
import '../styles/SkillsSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class SkillsSection extends Component {
    render() {
        return (
            <div className="skill-section">
                <div className="block-padding grey-section">
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ size: 6, offset: 3 }}>
                                <SkillCardTitle/>
                            </Col>
                        </Row>
                        <Row className="row-padding">
                            <SkillCard
                                title="Computer Languages"
                                text="Java, C++, HTML, CSS, JavaScript, MIPS Assembly"/>
                            <SkillCard
                                title="Frameworks & Libraries"
                                text="React, Sass, Alexa Voice UI"/>
                            <SkillCard
                                title="Technologies"
                                text="GIT, AWS Lambda, SnapChat Lens"/>
                            <SkillCard
                                title="Stacks"
                                text="Android App Development, Web Front End Development"/>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

function SkillCardTitle(props) {
    return (
        <div>
            <h2>skills</h2>
        </div>
    );
}

function SkillCard(props) {
    return (
        <Col sm={{ size: 3 }}>
            <Card className="skills-card">
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>{props.text}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

export default SkillsSection;