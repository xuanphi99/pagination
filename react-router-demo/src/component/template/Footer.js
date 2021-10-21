import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends Component {
    render() {
        return (
            <Container fluid color="red">
            <Row>
              <Col>Bài tập tuần 2 : ReactJS</Col>
            </Row>
          </Container>
        )
    }
}
