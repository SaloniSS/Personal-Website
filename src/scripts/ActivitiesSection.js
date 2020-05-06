// /src/components/AchievementsSection.js
import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardText,
    CardBody,
    CardTitle } from 'reactstrap';
import '../styles/ActivitiesSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const ActivitiesSection = () => {
    
    const ActivitiesCard = (activity) => {
        return (
            <Col sm={{ size: 4 }} className="card-padding">
                <Card className="achievement-card">
                    <CardBody>
                        <CardTitle>{activity.org}</CardTitle>
                        <CardTitle>{activity.title}</CardTitle>
                        <CardText>{activity.date}</CardText>
                        <CardText>{activity.text}</CardText>
                        <CardText>{activity.text2}</CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    }

    return (
        <div className="activities-section">
            <div className="block-padding grey-section">
                <Container>
                    <Row className="row-padding">
                        <Col sm={{ size: 6, offset: 3 }}>
                            <div>
                                <h2>Activities</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="row-padding">
                        <ActivitiesCard
                            title="Technical Lead - Cloud"
                            org="Google Developer Students Club, UTD Chapter"
                            date="December 2019 - Present"
                            text="Hosting workshops on campus on topics of Google Cloud Platform and backend developement"
                            text2="Leading and managing teams of undergraduate and graduate students 
                            to develop projects in a team environment for the Google Solution Challenge 
                            while enforcing Agile software development"
                        />
                        <ActivitiesCard
                            title="Event Planner"
                            org="Women Mentoring Women in Engineering, UTD Chapter"
                            date="May 2020 - Present"
                        />
                        <ActivitiesCard
                            title="Mentor"
                            org="Association of Computer Machinery, UTD Chapter"
                            date="August 2018 - Present"
                            text="Mentoring computer science freshmen in the development of academic, social and personal skills necessary to succeed in college"
                        />
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ActivitiesSection;