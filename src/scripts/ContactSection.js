// /src/components/ContactSection.js
import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import '../styles/ContactSection.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class ContactSection extends Component {
    render() {
        return (
            <div className="contact-section">
                <div className="block-padding grey-section">
                    <Container>
                        <Row className="row-padding">
                            <Col sm={{ size: 6, offset: 3 }}>
                                <ContactSectionTitle />
                                <hr></hr>
                                <ContactSectionContent />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

function ContactSectionTitle(props) {
    return (
        <div>
            <h2>contact me</h2>
        </div>
    );
}

function ContactSectionContent(props) {
    return (
        <div>
            <h4> Email : saloni.shivdasani@utdallas.edu </h4>
        </div>
    );
}

export default ContactSection;