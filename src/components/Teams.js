import React, { Component } from "react";
import axios from "axios";
// import { Form, Button, Table } from "react-bootstrap";
// import { Carousel } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataTeams: [],
      leagueID: 0,
      teamName: "",
      news: [],
    };
  }

  handleTeams = async (e) => {
    e.preventDefault();

    await this.setState({
      teamName: e.target[0].value,
    });
    let config = {
      method: "GET",
      // eslint-disable-next-line no-template-curly-in-string
      url: `https://v3.football.api-sports.io/teams?name=${this.state.teamName}`,
      // qs: { id: "33" },
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "896f2cddb7c7d8ebc3289460d4835b83",
      },
    };
    await axios(config).then((res) => {
      this.setState({
        dataTeams: res.data.response,
      });
    });
  };
  // componentDidMount = () => {
  //   axios.get("https://www.scorebat.com/video-api/v3/").then((res) => {

  //     this.setState({
  //       news: res.data.response,
  //     });
  //     console.log(res.data.response);
  //   });
  // };

  handleCeateFav = async (name, imgUrl) => {

    let config = await {
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND}/createfav`,
      data: {
        name: name,
        imgUrl: imgUrl,
        userEmail: this.props.auth0.user.email,
      }
    }
    axios(config)
  }
  // ------------------------
  // handlenews = async (e) => {
  //     e.preventDefault();
  //     let config = {
  //         method: "GET",
  //         url: "",

  //     };
  //     await axios(config).then((res) => {
  //         this.setState({
  //             news: res.data.articles,
  //         });

  //     });
  // };
  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleTeams(e)}>
          <input type="text"></input>
          <input type="submit"></input>
        </form>

        {/* --------------------table---------- */}

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>

              <th></th>
            </tr>
          </thead>
          {this.state.dataTeams.map((i) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <img
                        //   className="d-block w-100"
                        src={i.team.logo}
                        alt="logo"
                        width="90"
                        height="90"
                      />
                    </td>
                    <td>{i.team.name}</td>

                    <td>{i.team.country}</td>
                    <td>{i.team.founded}</td>

                    <td>{i.venue.capacity}</td>
                    <td>{i.venue.city}</td>
                    <td>
                      {" "}
                      <img
                        //   className="d-block w-100"
                        src={i.venue.image}
                        alt="logo"
                        width="90"
                        height="90"
                      />
                    </td>
                    <td>{i.venue.name}</td>
                    <td><button onClick={() => this.handleCeateFav(i.team.name, i.team.logo)}>Add to favorites</button></td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>
        <br />
        {/* ----------------------------------------             */}
        {/* <Carousel>
          {this.state.news.map((i, index) => {

            return (
              <>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={i.thumbnail}
                    alt="First slide"
                    style={{ height: "500px" }}
                  />
                  <Carousel.Caption>
                    <h3>{i.date}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </>
            );

          })}
        </Carousel> */}


      </>
    );
  }
}

export default withAuth0(Teams);
