import React from "react";

import { Container, ListGroup, Badge } from "react-bootstrap";

const CommentList = (props) => {
    constructor(props){
        super(props);
    
        this.state = {
          comments: [],
        };
      }


getComment = async (e) => {
    try {
        let response = await fetch('http://localhost:3001/book/${',
            {
                method: 'GET',
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2ODRjNDk4MzViMDAwMTc1ODRmMTAiLCJpYXQiOjE2MDU3OTcwNjEsImV4cCI6MTYwNzAwNjY2MX0.hQA7VW_vnHb7Kneok858CAUdXNM1RnCR9K-x__lomq0"
                })
            })
        if (response.ok) {
            console.log(response);
            this.setState({
                comments: response
            })
        } 
    } catch (e) {
        console.log(e) 
    }
}


    

  return (
    <Container>
        <ListGroup className="mt-5 mb-5">
          {this.state.comments.map((comment) => (
          <ListGroup.Item key={comment.elementId}>
                {comment.comment}
                <Badge pill variant="success">
                  {comment.rate}
                </Badge>
              </ListGroup.Item>
        ))}
        </ListGroup>
    </Container>
  );
};

export default CommentList