import React, { Component } from 'react';
import {
    Card,
    Button,
    Row,
    Col,
    Container

} from 'react-bootstrap';

class FootballCards extends Component {
    render() {
        return (
                <Container>

                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src="https://media.api-sports.io/football/leagues/2.png" />
                                <Card.Body>
                                    <Card.Title>"UEFA Champions League"</Card.Title>
                                    <Button  variant="primary" value='2' onClick={(e)=>this.props.handleFootballLive(e)}>Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://media.api-sports.io/football/leagues/39.png" />
                                <Card.Body>
                                    <Card.Title>"Premier League"</Card.Title>
                                    <Button variant="primary" value='39' onClick={(e)=>this.props.handleFootballLive(e)}>Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://media.api-sports.io/football/leagues/140.png" />
                                <Card.Body>
                                    <Card.Title>La Liga</Card.Title>
                                    <Button variant="primary" value='140' onClick={(e)=>this.props.handleFootballLive(e)}>Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://media.api-sports.io/football/leagues/78.png" />
                                <Card.Body>
                                    <Card.Title>Bundesliga 1</Card.Title>
                                    <Button variant="primary" value='78' onClick={(e)=>this.props.handleFootballLive(e)}>Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
        )
    }
}

export default FootballCards
