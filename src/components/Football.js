import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

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
    
  }

  handleFootballLive = async (e) => {
    e.preventDefault();
    await this.setState({

      leagueID: e.target.value
    })
    let config = await {
      method: "GET",
      url: `https://v3.football.api-sports.io/fixtures?league=${this.state.leagueID}&season=2021`,
      headers: {
        "x-rapidapi-key": "896f2cddb7c7d8ebc3289460d4835b83",

      },
    };
    await axios(config).then((res) => {
      this.setState({
        dataLives: res.data.response,
      });
      console.log('this.state.leagueID');
      console.log(this.state.leagueID)
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
                  <Button  value='2' onClick={(e) => this.handleFootballLive(e)}>Data</Button>
                  <Link to={`/league/${this.state.leagueID}`}> legaue</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.api-sports.io/football/leagues/39.png" />
                <Card.Body>
                  <Card.Title>"Premier League"</Card.Title>
                  <Button variant="primary" value='39' onClick={(e) => this.handleFootballLive(e)}>Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.api-sports.io/football/leagues/140.png" />
                <Card.Body>
                  <Card.Title>La Liga</Card.Title>
                  <Button variant="primary" value='140' onClick={(e) => this.handleFootballLive(e)}>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.api-sports.io/football/leagues/78.png" />
                <Card.Body>
                  <Card.Title>Bundesliga 1</Card.Title>
                  <Button variant="primary" value='78' onClick={(e) => this.handleFootballLive(e)}>Go somewhere</Button>
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
