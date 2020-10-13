import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import History from './History';
import CardApp from './Card-App'
// import Image from './image/pic-1.jpg';
import './App.css';

class Chat extends Component {
  constructor(props) {
    super(props)

  }

  sendName = () => {
    History.push('./CardApp')
  }

  render() {
    return (
<div>
      <Container fluid className='Container'>
        <Row>
          <Col className="coll" lg={12} md={12} sm={12}>
            <div>
              <h1>Saylani Web and Mobile Course</h1>
              <h4>Name : Muhammad Shadab</h4>
              <h5>Contact : 0333-3352375</h5>
            </div>
          </Col>
        </Row>

      </Container>
      <h1 className="h1">My Projects</h1>
      <CardApp />
      </div>
)
  }
}

export default Chat;
