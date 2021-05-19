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

const ExperienceSection = () => {
  return (
    <div className="experience-section">
      <div className="block-padding grey-section">
        <Container>
          <Row className="row-padding">
            <Col sm={{ size: 6, offset: 3 }}>
              <div>
                <h2>Work Experience</h2>
              </div>
            </Col>
          </Row>
          <Row className="row-padding">
            <Col sm={{ size: 6 }} className="card-padding">
              <Card className="about-card">
                <CardBody>
                  <i className="fa fa-briefcase"></i>
                  <CardTitle>Engineering Analyst</CardTitle>
                  <CardTitle>
                    Information Security Office, University of Texas at Dallas
                  </CardTitle>
                  <CardText>August 2020 - Present</CardText>
                  <CardText>
                    Developing and improving current tools and capabilities
                    using Django and Golang on Linux servers along with Jira,
                    Confluence, and Splunk
                  </CardText>
                  <CardText>
                    Automating tasks using Python on Hive and Duo for 30,000+
                    users on campus and Bash for 15+ servers used to decrease
                    manual work time by over 90%
                  </CardText>
                  <CardText>
                    Performing system administration tasks, such as updating and
                    patching hosts, building servers, installing hardware, and
                    more
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col sm={{ size: 6 }} className="card-padding">
              <Card className="about-card">
                <CardBody>
                  <i className="fa fa-briefcase"></i>
                  <CardTitle>
                    Logistics Lead and Computer Science Instructor
                  </CardTitle>
                  <CardTitle>
                    Office for Computer Science Education and Outreach,
                    University of Texas at Dallas
                  </CardTitle>
                  <CardText>February 2019 - August 2019</CardText>
                  <CardText>
                    Responsible for planning, coordination, execution and
                    supervision of conferences, workshops,and summer camps held
                    on campus
                  </CardText>
                  <CardText>
                    Conducted private tutoring and coding club sessions for
                    students from elementary school to high school in topics of
                    programming languages and introductory computer science
                    principles
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

export default ExperienceSection;
