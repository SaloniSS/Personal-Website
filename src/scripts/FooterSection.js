// /src/components/ContactSection.js
import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import '../styles/FooterSection.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const FooterSection = (props) => {
    const linkedin = props.linkedin;
    const github = props.github;
    const devpost = props.devpost;
    const resume = props.resume;

    return (
        <div className="footer-section">
            <div className="block-padding grey-section">
                <Container>
                    <Row className="row-padding">
                        <Col sm={{ offset: 4, size: 1 }}>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin fa-3x icon-box"></i>
                            </a>
                        </Col>
                        <Col sm={{ size: 1 }}>
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github fa-3x icon-box"></i>
                            </a>
                        </Col>
                        <Col sm={{ size: 1 }}>
                            <a href={devpost} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-code fa-3x icon-box"></i>
                            </a>
                        </Col>
                        <Col sm={{ size: 1 }}>
                            <a href={resume} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-clipboard fa-3x icon-box"></i>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default FooterSection;