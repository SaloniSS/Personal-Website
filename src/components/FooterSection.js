// /src/components/ContactSection.js
import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import '../styles/FooterSection.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class FooterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkedin: props.linkedin,
            github: props.github,
            devpost: props.devpost,
            twitter: props.twitter
        };
    }
    render() {
        return (
            <div className="footer-section">
                <div className="block-padding grey-section">
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ offset: 4, size: 1 }}>
                                <a href={this.state.linkedin} target="_blank">
                                    <i className="fa fa-linkedin fa-3x icon-box"></i>
                                </a>
                            </Col>
                            <Col sm={{ size: 1 }}>
                                <a href={this.state.github} target="_blank">
                                    <i className="fa fa-github fa-3x icon-box"></i>
                                </a>
                            </Col>
                            <Col sm={{ size: 1 }}>
                                <a href={this.state.twitter} target="_blank">
                                    <i className="fa fa-twitter fa-3x icon-box"></i>
                                </a>
                            </Col>
                            <Col sm={{ size: 1 }}>
                                <a href={this.state.devpost} target="_blank">
                                    <i className="fa fa-code fa-3x icon-box"></i>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default FooterSection;