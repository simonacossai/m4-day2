import React from 'react';
import './Footer.css';
import { Container, Row, Col} from "react-bootstrap";

const Footer = () => {
  return (
<Container className="footer justify-content-center text-center p-4" fluid>
<Row className="mx-auto">
    <Col className="footer-link" >
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
    </Col>
    <Col className="footer-link" >
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
    </Col>
    <Col className="footer-link" >
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
    </Col>
  </Row>
</Container>
  );
};

export default Footer;