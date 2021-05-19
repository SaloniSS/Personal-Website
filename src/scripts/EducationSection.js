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
import "../styles/ExperienceSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const EducationSection = () => {
  return (
    <div className="experience-section">
      <div className="block-padding grey-section">
        <Container>
          <Row className="row-padding">
            <Col sm={{ size: 6, offset: 3 }}>
              <div>
                <h2>Education</h2>
              </div>
            </Col>
          </Row>
          <Row className="row-padding">
            <Col sm={{ size: 12 }} className="card-padding">
              <Card className="about-card">
                <CardBody>
                  <i className="fa fa-university"></i>
                  <CardTitle>BSc, Software Engineering</CardTitle>
                  <CardTitle>University of Texas at Dallas</CardTitle>
                  <CardText>Graduating December 2021</CardText>
                  <CardText>Concentration : Information Assurance</CardText>
                  <CardText>
                    Honors: Academic Excellence Scholar, Collegium V Honors
                    Program
                  </CardText>
                  <CardText>
                    Fast Track Program: Taking master's level courses with
                    automatic admission and matriculation to graduate program
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default EducationSection;
