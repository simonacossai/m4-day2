import React from 'react';
import './Books.css';
import { Container, Row, Col, Card, Badge } from "react-bootstrap";



class Books extends React.Component {
    state = {
        book: [],

    };
    fetchBooks = async (e) => {
     try {
        let response = await fetch(`${process.env.REACT_APP_API_URL}/books`,
            {
                method: 'GET',
            })
        if (response.ok) {
            console.log(response);
           let data = await response.json();
           this.setState({book: data})
        } else {
            console.log('an error occurred')
            let error = await response.json()
           console.log(error);
        }
    } catch (e) {
        console.log(e) 
    }
    }
    componentDidMount(){
        this.fetchBooks();
    }
    
    render() {
        return (
            <div>
                <Container className=" justify-content-center mt-3 mb-4">
                    <div className="d-flex align-items-center">
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
                                <Card style={{ width: '18rem' }} className="card" onClick={() =>this.props.props.history.push('/addcomment/' + book.asin)}>
                                    <Card.Img variant="top" src={book.img} className="books-image" />
                                    <Card.Body>
                                        <Card.Title className="title" >{book.title}</Card.Title>
                                        <div className="d-flex justify-content-between align-items-center text-center mt-2">
                                            <Badge variant="secondary" className="badge">{book.category}</Badge>
                                            <small className="text-muted">${book.price}</small>
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

