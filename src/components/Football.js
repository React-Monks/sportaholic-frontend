import React, { Component } from "react";
import { Link } from 'react-router-dom'

import {
  Card,
  Button,
  Row,
  Col,
  Container
} from 'react-bootstrap';

class Football extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataLives: [],
      leagueID: 0,
      date: ''
    };
  };
  handleFootballLive = async (e) => {
    e.preventDefault();
    await this.setState({
      leagueID: e.target.value
    });
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="https://media.api-sports.io/football/leagues/2.png" />
                <Card.Body>
                  <Card.Title>"UEFA Champions League"</Card.Title>
                  <Link to={`/league/2`}>
                    <Button renderAs="button">
                      <span>Fixture</span>
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.api-sports.io/football/leagues/39.png" />
                <Card.Body>
                  <Card.Title>"Premier League"</Card.Title>
                  <Link to={`/league/39`}>
                    <Button renderAs="button">
                      <span>Fixture</span>
                    </Button>
                    </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.api-sports.io/football/leagues/140.png" />
                <Card.Body>
                  <Card.Title>La Liga</Card.Title>
                  <Link to={`/league/140`}>
                    <Button renderAs="button">
                      <span>Fixture</span>
                    </Button>
                    </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.api-sports.io/football/leagues/78.png" />
                <Card.Body>
                  <Card.Title>Bundesliga 1</Card.Title>
                  <Link to={`/league/78`}>
                    <Button renderAs="button">
                      <span>Fixture</span>
                    </Button>
                    </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Football;
