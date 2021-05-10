// /src/components/AchievementsSection.js
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import "../styles/ActivitiesSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const ActivitiesSection = () => {
  const ActivitiesCard = (activity) => {
    return (
      <Col sm={{ size: 6 }} className="card-padding">
        <Card className="achievement-card">
          <CardBody>
            <CardTitle>{activity.org}</CardTitle>
            <CardTitle>{activity.title}</CardTitle>
            <CardText>{activity.date}</CardText>
            <CardText>{activity.text}</CardText>
            <CardText>{activity.text2}</CardText>
            <CardText>{activity.text3}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  };

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
              title="Education Officer, Developer, Mentor"
              org="Association of Computer Machinery, UTD Chapter"
              date="August 2018 - Present"
              text="Hosting workshops on campus on topics of general computing and personal development for an audience of 150+ students"
              text2="Organizing events and mentoring freshmen in the development of academic, social and personal skills necessary to succeed in college"
            />
            <ActivitiesCard
              title="Technical Lead - Cloud"
              org="Google Developer Students Club, UTD Chapter"
              date="December 2019 - Present"
              text="Hosting workshops on campus on topics of Google Cloud Platform as well as general computing for an audience of 100+ students"
              text2="Managed teams of 25 students to develop 6 projects for the global Google Solution Challenge while enforcing Agile development"
            />
            <ActivitiesCard
              title="Historian"
              org="Queer and Trans People of Color, UTD Chapter"
              date="April 2021 - Present"
            />
            <ActivitiesCard
              title="Event Planner"
              org="Women Mentoring Women in Engineering, UTD Chapter"
              date="May 2020 - December 2020"
              text="Responsible for planning events for groups of professional and academic mentors with undergraduate women enrolled in STEM"
            />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ActivitiesSection;
