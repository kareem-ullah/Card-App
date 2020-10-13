import React, { Component } from 'react';
import Data from './data';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';


function CardApp() {

    return (
        <Container className="divcont">
            <Row>
                {
                    Data.map((item) => {
                        return (
                            <Col className="colum" md={6} lg={4} sm={12}>
                                <div className="Card">
                                    <div className="CardDiv">
                                        <img className="ProjectImg" src={item.image} />
                                        <h3>{item.name}</h3>
                                        <span>{item.title}</span>
                                    </div>

                                    <div className="BtnDiv">
                                        <Button variant="outline-primary" onClick={() => window.open(item.link, '_blank')} block>CHECK PROJECT</Button>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default CardApp;