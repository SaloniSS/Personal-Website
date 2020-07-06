import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import "../styles/ProjectsSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const axios = require("axios").default;

const ProjectsSection = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        "https://saloni-shivdasani.appspot.com/api/v1/projects/featured-projects"
      );
      setFeaturedProjects(result.data.data.reverse());
    }
    fetchData();
  }, [featuredProjects]);

  const FeaturedProjectCard = (project_info) => {
    const project = project_info.project;
    return (
      <Col sm={{ size: 4 }} className="card-padding">
        <Card className="project-card">
          <CardBody>
            <CardTitle>{project.title}</CardTitle>
            <CardTitle>{project.organization}</CardTitle>
            <CardText>{project.date}</CardText>
            {project.award && (
              <CardText>
                {" "}
                <u>Winner : {project.award}</u>
              </CardText>
            )}
            <CardText>{project.description}</CardText>
            <CardText>{project.contribution}</CardText>
            <CardText>
              More Information:
              <a
                href={project.portfolio}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Click Here
              </a>
            </CardText>
            <CardText>
              Source Code:
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                {" "}
                Click Here{" "}
              </a>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  };

  return (
    <div className="Projects-section">
      <div className="block-padding grey-section">
        <Container>
          <Row className="row-padding">
            <Col sm={{ size: 6, offset: 3 }}>
              <div>
                <h2>Projects</h2>
              </div>
            </Col>
          </Row>
          <Row className="row-padding">
            {featuredProjects.map(function (featuredProject, i) {
              return <FeaturedProjectCard project={featuredProject} key={i} />;
            })}
          </Row>
          <Row className="row-padding">
            <Col sm={{ size: 6, offset: 3 }}>
              <div>
                <Link to="/projects">
                  <Button href="">More Projects >>> </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProjectsSection;
