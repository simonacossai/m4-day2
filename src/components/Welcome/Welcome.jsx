import React from 'react';
import './Welcome.css';
import { Container, Jumbotron, Button } from "react-bootstrap";
import Books from "../LatestBooks/Books";

class Welcome extends React.Component {
  render(){
  return (
    <>
    <Jumbotron fluid className="jumbotron">
      <div className="overlay"></div>
      <Container className="welcomeContainer">
        <h1>Strive bookshelf</h1>
        <p>
          The beauty of having a good book available in a day, directly to your phone.
        </p>
        <Button variant="primary" size="lg" className="button">
          See more
    </Button>{' '}
      </Container>
    </Jumbotron>
    <Books props={this.props}/>
    </>
  )
  }
};

export default Welcome;