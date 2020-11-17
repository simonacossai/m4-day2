import React from 'react';
import './Books.css';
import { Container, Row, Col, Card, Badge, Dropdown, DropdownButton } from "react-bootstrap";
import horror from "../../data/horror.json";
import romance from "../../data/romance.json";
import history from "../../data/history.json";
import scifi from '../../data/scifi.json';


class Books extends React.Component {
    state = {
        book: horror,
      };
      
      changeCategory = (event) => {
     if(event.currentTarget.value==="horror"){
        this.setState({ book: horror });
     }else if(event.currentTarget.value==="romance"){
        this.setState({ book: romance});
     }else if(event.currentTarget.value==="history"){
        this.setState({ book: history});
     }else if(event.currentTarget.value==="sci-fi"){
        this.setState({ book: scifi});

     }
};
      
    render() {
      return (
    <div>
    <Container className=" justify-content-center mt-3 mb-4">
    <div class="d-flex align-items-center">
        <h1>Latest releases</h1> 
        <select id="dropdown-basic-button" className="ml-3 dropdown" onClick={this.changeCategory} >
            <option >category</option>
            <option value="romance">romance</option>
            <option value="horror">horror</option>
            <option value="history">history</option>
            <option value="sci-fi">sci-fi</option>
        </select>
    </div>
    <hr className="my-2" />
    <p>See the best books published recently</p>
    <Row className="justify-content-start mt-3">     
    {this.state.book.map((book) => (
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


