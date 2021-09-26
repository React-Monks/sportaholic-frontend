import React, { Component } from "react";
import axios from "axios";
import {  Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

class Football extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
      dataLives: [],
    };
  }
  //   handlefootballOne = async (e) => {
  //     e.preventDefault();
  //     let config = {
  //       method: "GET",
  //       baseURL: "https://www.scorebat.com/video-api/v3/",
  //     };

  //     await axios(config).then((res) => {
  //       this.setState({
  //         data: res.data.response,
  //       });
  //       console.log(res.data.response);
  //     });
  //   };

  //   ---------------------league2--------------
  handleFootballLive = async () => {
    let config = {
      method: "GET",
      url: "https://v3.football.api-sports.io/fixtures?league=2&season=2021",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "4dac19a89c8f0784ef509bdbda44cf5a",
      },
    };
    await axios(config).then((res) => {
      this.setState({
        dataLives: res.data.response,
      });
      console.log(res.data.response);
    });
  };

  render() {
    return (
      <>
        <Button
          onClick={() => {
            this.handleFootballLive();
          }}
        >
          click football's Lives
        </Button>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Date</th>
              <th></th>
              <th>Fixture</th>
              <th>...</th>

              <th>Score</th>
            </tr>
          </thead>
          {this.state.dataLives.map((i) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{i.fixture.date}</td>
                    <td>{i.fixture.status.long}</td>
                    <td>
                      {" "}
                      <img
                        //   className="d-block w-100"
                        src={i.teams.home.logo}
                        alt="logo"
                        width="90"
                        height="90"
                      />
                      {i.teams.home.name} VS {i.teams.away.name}
                      <img
                        //   className="d-block w-100"
                        src={i.teams.away.logo}
                        alt="logo"
                        width="90"
                        height="90"
                      />
                    </td>
                    <td>{i.league.name}</td>
                    <td>
                      {i.score.fulltime.home} : {i.score.fulltime.away}
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>

        {/* {this.state.data.map((i) => {
          return (
            <>
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>
                    {" "}
                    <p>{i.title}</p>
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <img
                    className="d-block w-100"
                    src={i.thumbnail}
                    alt="Third slide"
                    width="90"
                    height="400"
                  />
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary">Close</Button>
                  <Button variant="primary">Save changes</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </>
          );
        })} */}
      </>
    );
  }
}

export default Football;
