import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardLink,
  Button,
} from "reactstrap";
import "../styles/ProjectsSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import projects from "../data/projects.json";
var _ = require("lodash");

const ProjectsPage = () => {
  const categories = _.groupBy(projects, "category");
  const regularProjects = categories.regular.reverse();
  const winningProjects = categories.winner.reverse();
  const longProjects = categories.long.reverse();

  const ProjectCard = (project_info) => {
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
                <u>Winner : {project.award}</u>{" "}
              </CardText>
            )}
            <CardText>{project.description}</CardText>
            <CardText>{project.contribution}</CardText>
            {project.portfolio && (
              <CardLink href={project.portfolio} target="_blank">
                {" "}
                More Information{" "}
              </CardLink>
            )}
            {project.code && (
              <CardLink href={project.code} target="_blank">
                {" "}
                Source Code{" "}
              </CardLink>
            )}
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
                <h2>Long Term Projects</h2>
              </div>
            </Col>
          </Row>
          <Row className="row-padding">
            {longProjects.map(function (longProject, i) {
              return <ProjectCard project={longProject} key={i} />;
            })}
          </Row>
          <Row className="row-padding">
            <Col sm={{ size: 6, offset: 3 }}>
              <div>
                <h2>Featured Projects</h2>
              </div>
            </Col>
          </Row>
          <Row className="row-padding">
            {winningProjects.map(function (winningProject, i) {
              return <ProjectCard project={winningProject} key={i} />;
            })}
          </Row>
          <Row className="row-padding">
            <Col sm={{ size: 6, offset: 3 }}>
              <div>
                <h2>Other Projects</h2>
              </div>
            </Col>
          </Row>
          <Row className="row-padding">
            {regularProjects.map(function (project, i) {
              return <ProjectCard project={project} key={i} />;
            })}
          </Row>
          <Row className="row-padding">
            <Col sm={{ size: 6, offset: 3 }}>
              <div>
                <Link to="/">
                  <Button href="">Home &gt;&gt;&gt; </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProjectsPage;
