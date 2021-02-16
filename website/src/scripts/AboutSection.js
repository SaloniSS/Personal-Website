import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/AboutSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const AboutSection = () => {
  const AboutCardContent = () => {
    return (
      <div>
        <h4>
          I am a senior at The University of Texas at Dallas, and I am currently
          majoring in Software Engineering with a concentration in Information
          Assurance. I am interested and have experience in full stack
          development, cloud computing, and cybersecurity. I hope to find
          opportunities where I can gain exposure to algorithm and project
          design. My ultimate aim is to develop futuristic products for users
          because I am inspired by the impact of computing on society.
        </h4>
      </div>
    );
  };

  return (
    <div className="dark-bkg">
      <div className="block-padding grey-section">
        <Container>
          <Row className="row-padding">
            <Col sm={{ size: 6, offset: 3 }}>
              <div>
                <h2>About Me</h2>
              </div>
              <hr></hr>
              <AboutCardContent />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutSection;
