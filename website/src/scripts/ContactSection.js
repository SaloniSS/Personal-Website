// /src/components/ContactSection.js
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/ContactSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const ContactSection = () => {
  return (
    <div className="contact-section dark-bkg">
      <div className="block-padding grey-section">
        <Container>
          <Row className="row-padding">
            <Col sm={{ size: 6, offset: 3 }}>
              <div>
                <h2>contact me</h2>
              </div>
              <hr></hr>
              <div>
                <h4> Email : saloni.shivdasani@utdallas.edu </h4>
                <h4> Alternate Email : salonishivdasani@gmail.com </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactSection;
