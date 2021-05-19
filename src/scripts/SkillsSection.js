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
import "../styles/SkillsSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const SkillsSection = () => {
  const SkillCard = (skills) => {
    return (
      <Col sm={{ size: skills.size }} className="card-padding">
        <Card className="skills-card">
          <CardBody>
            <CardTitle>{skills.title}</CardTitle>
            <CardText>{skills.text}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
  };

  return (
    <div className="skills-section">
      <div className="block-padding grey-section">
        <Container>
          <Row className="row-padding">
            <Col sm={{ size: 6, offset: 3 }}>
              <div>
                <h2>Skills</h2>
              </div>
            </Col>
          </Row>
          <Row className="row-padding">
            <SkillCard
              title="Computer Languages"
              text="Python, JavaScript, Java, SQL, C++, R, HTML, CSS"
              size="4"
            />
            <SkillCard
              title="Frameworks & Libraries"
              text="React, Flask, Node.js, Express, MongoDB, React Native, Flutter, Electron, Hadoop, Spark"
              size="4"
            />
            <SkillCard
              title="DevOps"
              text="GIT, Google Cloud Platform, Firebase, Amazon Web Services"
              size="4"
            />
            <SkillCard
              title="Cybersecurity"
              text="Open Source Intelligence, Cryptography, Password Cracking, Log Analysis, Network Traffic Analysis, Forensics, Intrusion Detection, Security Operations, Network and Application Penetration Testing, Wireless Access Exploitation, Scanning, Web Application Exploitation, Enumeration and Exploitation"
              size="12"
            />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SkillsSection;
