import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
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
      playerName: e.target.playerName.value,
    });
    console.log(e.target[0]);
    let config = await {
      method: "GET",

      url: `https://v3.football.api-sports.io/players?search=${this.state.playerName}&league=2`,

      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.REACT_APP_APIFOOTBAL,
      },
    };
    await axios(config).then((res) => {
      this.setState({
        dataPlayers: res.data.response,
      });
      console.log(res.data);
    });
  };
  handleCeateFav = async (name, imgUrl) => {

    let config = await {
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND}/createfav`,
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.REACT_APP_APIFOOTBAL,
      },
      data: {
        name: name,
        imgUrl: imgUrl,
        userEmail: this.props.auth0.user.email,
        type: "player"
      }
    }
    axios(config)
  }
  render() {
    return (
      <>

        {/* <form onSubmit={(e) => this.handlePlayers(e)}>
          <input type="text"></input>
          <input type="submit"></input>
        </form> */}

        <div className="login-box">
          <h2>Player name</h2>
          <form  onSubmit={(e) => {
            this.handlePlayers(e);
          }}>
            <div className="user-box">
              <input type="text" name="playerName" required />
              <label>Name</label>
            </div>
            
            <a href="nothinf">
            <input id="submitBTN" type="submit"/>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              
            </a>
            
          </form>
        </div>

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
              <th>Team logo</th>
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

                        src={i.statistics[0].team.logo}
                        alt="logo"
                        width="90"
                        height="90"
                      />
                    </td>
                    <td><button onClick={() => this.handleCeateFav(i.player.name, i.player.photo)}>Add to favorites</button></td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>

      </>
    );
  }
}

export default withAuth0(Players);
