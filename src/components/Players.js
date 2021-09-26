import React, { Component } from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import { Table } from "react-bootstrap";
class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataPlayers: [],
      leagueID: 0,
      playerName: "",
    };
  }

  handlePlayers = async (e) => {
    e.preventDefault();

    await this.setState({
      playerName: e.target[0].value,
    });
    console.log(e.target[0]);
    let config = await {
      method: "GET",
      // eslint-disable-next-line no-template-curly-in-string
      url: `https://v3.football.api-sports.io/players?search=${this.state.playerName}&league=2`,
      // qs: { id: "33" },
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "896f2cddb7c7d8ebc3289460d4835b83",
      },
    };
    await axios(config).then((res) => {
      this.setState({
        dataPlayers: res.data.response,
      });
      console.log(res.data);
    });
  };
  render() {
    return (
      <>
        <form onSubmit={(e) => this.handlePlayers(e)}>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
        {/* -------------------table */}

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th></th>
              <th>Player Name</th>
              <th>Last Name</th>
              <th>Birth Date</th>
              <th>Birth country</th>

              <th>Age</th>
              <th>Nationality</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Team Name</th>
              <th></th>
            </tr>
          </thead>
          {this.state.dataPlayers.map((i) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={i.player.photo}
                        alt="logo"
                        width="90"
                        height="90"
                      />
                    </td>

                    <td>{i.player.name}</td>
                    <td>{i.player.lastname}</td>

                    <td>{i.player.birth.date}</td>
                    <td>{i.player.birth.country}</td>

                    <td>{i.player.age}</td>
                    <td>{i.player.nationality}</td>

                    <td>{i.player.weight}</td>
                    <td>{i.player.height}</td>
                    <td>{i.statistics[0].team.name}</td>

                    <td>
                      {" "}
                      <img
                        //   className="d-block w-100"
                        src={i.statistics[0].team.logo}
                        alt="logo"
                        width="90"
                        height="90"
                      />
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>

        {/* <Container>
            <Row>
              <Col xs={6}>
                              <Carousel>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://files.slack.com/files-pri/TNGRRLUMA-F02FP2JGJMQ/image_from_ios.jpg"
      alt="Third slide"
      width="90"
      height="400"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        {/* </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://files.slack.com/files-pri/TNGRRLUMA-F02FL2B0WQ5/image_from_ios.jpg"
      alt="Third slide"
      width="90"
      height="400"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      </>
    );
  }
}

export default Players;
