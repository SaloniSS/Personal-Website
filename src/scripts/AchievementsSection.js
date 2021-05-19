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
import achievements from "../data/achievements.json";

const AchievementsSection = () => {
  const AchievementCard = (props) => {
    const achievement = props.achievement;
    return (
      <Col sm={{ size: 4 }} className="card-padding">
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
            {achievements.map((value, index) => {
              return <AchievementCard achievement={value} />;
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AchievementsSection;
