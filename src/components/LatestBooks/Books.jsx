import React from 'react';
import './Books.css';
import { Container, Row, Col, Card, Badge, Dropdown, DropdownButton } from "react-bootstrap";
import horror from "../../data/horror.json";
import romance from "../../data/romance.json";


class Books extends React.Component {
    render() {
      return (
    <div>
    <Container className=" justify-content-center mt-3 mb-4">
    <div class="d-flex align-items-center">
        <h1>Latest releases</h1> 
        <DropdownButton id="dropdown-basic-button" className="ml-3 dropdown" title="Dropdown button">
        <Dropdown.Item href="#/action-1" >Romance</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
    </div>
    <hr className="my-2" />
    <p>See the best books published recently</p>
    <Row className="justify-content-start mt-3">     
    {horror.map((book) => (
        <Col className="mt-3" key={book.asin} >
        <Card style={{ width: '18rem' }} className="card">
            <Card.Img variant="top" src={book.img} className="books-image"/>
            <Card.Body>
                <Card.Title className="title" >{book.title}</Card.Title>
                <div class="d-flex justify-content-between align-items-center text-center mt-2">
                <Badge variant="secondary" className="badge">{book.category}</Badge>
                <small class="text-muted">${book.price}</small>
                </div>
            </Card.Body>
        </Card>
        </Col>
    ))}
    </Row>
    </Container>
    </div>
 );
}
}

export default Books;


