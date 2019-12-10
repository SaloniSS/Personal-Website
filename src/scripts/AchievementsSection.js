// /src/components/AchievementsSection.js
import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardText,
    CardBody,
    CardTitle } from 'reactstrap';
import '../styles/AchievementsSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class AchievementsSection extends Component {
    render() {
        return (
            <div className="achievements-section">
                <div className="block-padding grey-section">
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ size: 6, offset: 3 }}>
                                <AchievementsCardTitle/>
                            </Col>
                        </Row>
                        <Row className="row-padding">
                            <AwardsCard
                                icon="fa fa-trophy"
                                title="National Quarter-Finalist"
                                org="Cyber Fast-Track Game, SANS Institute"
                                position="Placed among the top 2,400 quarter-finalists from more than 13,000 participants
                                nationally and top 9 from 62 participants from The University of Texas at Dallas."
                                description = "Based on cybersecurity challenges on Forensics, Intrusion detection, Security operations, System and network penetration testing, and Application penetration testing."/>
                            <AchievementCard
                                icon="fa fa-university"
                                title="Collegium V Honors Program"
                                org="Hobson Wildenthal Honors College, The University of Texas at Dallas"
                                text="A selective honors program based on high school achievements, standardized
                                test scores, personal statements and letters of recommendation."
                                activities="Activities include: Enroll in challenging classes with intensive coursework, 
                                participate in roundtables, volunteer at events and attend performing arts events."/>
                            <AchievementCard
                                icon="fa fa-university"
                                title="Academic Excellence Scholar"
                                org="The University of Texas at Dallas"
                                text="Received full tuition scholarship along with $1000 stipend per semester based on 
                                high school achievements, standardized test scores, personal statements and 
                                letters of recommendation."/>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

function AchievementsCardTitle(props) {
    return (
        <div>
            <h2>Achievements</h2>
        </div>
    );
}

function AchievementCard(props) {
    return (
        <Col sm={{ size: 4 }} className="card-padding">
            <Card className="achievement-card">
                <CardBody>
                    <i className={props.icon}></i>
                    <CardTitle>{props.title}</CardTitle>
                    <CardTitle>{props.org}</CardTitle>
                    <CardText>{props.text}</CardText>
                    <CardText>{props.activities}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

function AwardsCard(props) {
    return (
        <Col sm={{ size: 4 }} className="card-padding">
            <Card className="achievement-card">
                <CardBody>
                    <i className={props.icon}></i>
                    <CardTitle>{props.title}</CardTitle>
                    <CardTitle>{props.org}</CardTitle>
                    <CardText>{props.position}</CardText>
                    <CardText>{props.description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

export default AchievementsSection;