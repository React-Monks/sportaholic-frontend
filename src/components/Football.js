import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { withAuth0 } from '@auth0/auth0-react';
import axios from "axios";
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

  componentDidMount = () => {
    let config = {
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND}/article`,
    }
    axios(config).then(res => {
      this.setState({
        data: res.data
      })
    })

  }

  handleArticleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND}/createArticle`,
      data: {
        userName: this.props.auth0.user.name,
        userEmail: this.props.auth0.user.email,
        text: e.target.article.value
      }
    }
    axios(config).then(res => {
      this.setState({
        data: res.data
      })
    })

  }
  render() {
    console.log(this.state.data);
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
        <h2>Users articles</h2>
        <table>
          {this.state.data.map(article => {
            return (<tr>
              <th>
                {article.userName}
              </th>
              <th>
                {article.text}
              </th>
            </tr>)

          })
          }
        </table>
        <form onSubmit={(e) => { this.handleArticleSubmit(e) }}>
          <label>Write down your article</label>
          <br />
          <textarea rows="4" cols="50" name='article' />
          <br />
          <input type='submit' />
        </form>
      </>
    );
  }
}

export default withAuth0(Football);
