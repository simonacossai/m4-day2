import React from 'react'
import { Alert, Button, Col, Form, Row, Spinner, Container, ListGroup, Badge } from 'react-bootstrap'

class AddComment extends React.Component {
    state = {
        comment: {
            comment: "",
            rate: 0,
            userName: ""
        },
        elementId: this.props.match.params.id,
        comments: [],
    }
    updateCommentField = (e) => {
        let comment = { ...this.state.comment }
        let currentId = e.currentTarget.id
        comment[currentId] = e.currentTarget.value
        this.setState({ comment: comment })
    }

    submitComment = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        console.log(this.state.comment)
        try {
            let response = await fetch(`${process.env.REACT_APP_API_URL}/books/${this.state.elementId}/comments`,
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.comment),
                    headers: new Headers({
                        "Content-Type": "application/json",
                    })
                })
            if (response.ok) {
                console.log(response);
                alert('comment published!')
                this.getComment()
                this.setState({
                    comment: {
                        comment: '',
                        rate: 0,
                        userName: ''
                    },
                })
            } else {
                console.log('an error occurred')
                let error = await response.json()
                console.log(error);
            }
        } catch (e) {
            console.log(e)
        }
    }


    getComment = async (e) => {
        try {
            let response = await fetch(`${process.env.REACT_APP_API_URL}/books/${this.state.elementId}/comments`,
                {
                    method: 'GET',
                })
            if (response.ok) {
                let data = await response.json()
                this.setState({
                    comments: data
                })
                console.log(data)
            }
        } catch (e) {
            console.log(e)
        }
    }
    componentDidMount() {
        this.getComment()
    }



    render() {
        return (
            <div>

                <Container>
                    <Form className="w-100 mb-5" onSubmit={this.submitComment}>
                        <Row>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label htmlFor="userName">Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="userName"
                                        id="userName"
                                        placeholder="your username"
                                        value={this.state.comment.UserNamE}
                                        onChange={this.updateCommentField}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label htmlFor="comment">Comment</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="comment"
                                        id="comment"
                                        placeholder="add a comment"
                                        value={this.state.comment.comment}
                                        onChange={this.updateCommentField}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label htmlFor="rate">
                                        What's your rate?
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="rate"
                                        id="rate"
                                        value={this.state.comment.rate}
                                        onChange={this.updateCommentField}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Container>

                <Container>
                    <ListGroup className="mt-5 mb-5">
                        {this.state.comments.map((comment) => (
                            <ListGroup.Item key={comment.elementId} className="d-flex justify-content-between">
                                {comment.comment}
                                <Badge pill variant="success">
                                    {comment.rate}
                                </Badge>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Container>
            </div>
        )
    }
}

export default AddComment
