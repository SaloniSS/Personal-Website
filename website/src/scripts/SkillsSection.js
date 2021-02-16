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
      <Col sm={{ size: 3 }} className="card-padding">
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
    <div className="dark-bkg">
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
              text="Java, JavaScript, SQL, Python, C++, R, HTML, CSS"
            />
            <SkillCard
              title="Frameworks & Libraries"
              text="React, Node.js, Express, MongoDB, React Native, Electron, Flask, NLTK, Chrome Extension API"
            />
            <SkillCard
              title="Cybersecurity"
              text="Open Source Intelligence, Cryptography, Password Cracking, Log Analysis, Network Traffic Analysis, Forensics, Intrusion Detection, Security Operations, Network and Application Penetration Testing, Wireless Access Exploitation, Scanning, Web Application Exploitation, Enumeration and Exploitation"
            />
            <SkillCard title="DevOps" text="Git, GCP, Firebase, AWS" />
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SkillsSection;
