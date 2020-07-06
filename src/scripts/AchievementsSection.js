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
import "../styles/AchievementsSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const AchievementsSection = () => {
  const AchievementCard = (achievement) => {
    return (
      <Col sm={{ size: 6 }} className="card-padding">
        <Card className="achievement-card">
          <CardBody>
            <i className={achievement.icon}></i>
            <CardTitle>{achievement.title}</CardTitle>
            <CardTitle>{achievement.org}</CardTitle>
            <CardTitle>{achievement.date}</CardTitle>
            <CardText>{achievement.text}</CardText>
            <CardText>{achievement.activities}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  };

  return (
    <div className="achievements-section">
      <div className="block-padding grey-section">
        <Container>
          <Row className="row-padding">
            <Col sm={{ size: 6, offset: 3 }}>
              <div>
                <h2>Achievements</h2>
              </div>
            </Col>
          </Row>
          <Row className="row-padding">
            <AchievementCard
              icon="fa fa-trophy"
              title="First Place Winner"
              org="UTD Data Science Club"
              date="February 2020"
              text="Placed first among about 100+ participants from The University of Texas at Dallas."
              activities="Based on creation and completion of ANSI SQL queries at a SQL bootcamp"
            />
            <AchievementCard
              icon="fa fa-trophy"
              title="National Quarter-Finalist"
              org="Cyber Fast-Track Game, SANS Institute"
              date="May 2019"
              text="Placed among the top 2,400 quarter-finalists from more than 13,000 participants
                            nationally and top 9 from 62 participants from The University of Texas at Dallas."
              activities="Based on cybersecurity challenges on Forensics, Intrusion detection, Security operations, System and network penetration testing, and Application penetration testing."
            />
            <AchievementCard
              icon="fa fa-university"
              title="Collegium V Honors Program"
              org="Hobson Wildenthal Honors College, The University of Texas at Dallas"
              date="August 2018 - Present"
              text="A selective honors program based on high school achievements, standardized
                            test scores, personal statements and letters of recommendation."
              activities="Activities include: Enroll in challenging classes with intensive coursework, 
                            participate in roundtables, volunteer at events and attend performing arts events."
            />
            <AchievementCard
              icon="fa fa-university"
              title="Academic Excellence Scholar"
              org="The University of Texas at Dallas"
              date="August 2018 - Present"
              text="Received full tuition scholarship along with $1000 stipend per semester based on 
                            high school achievements, standardized test scores, personal statements and 
                            letters of recommendation."
            />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AchievementsSection;
