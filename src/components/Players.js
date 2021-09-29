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
        <div className="login-box">
          <h2>Player name</h2>
          <form onSubmit={(e) => {
            this.handlePlayers(e);
          }}>
            <div className="user-box">
              <input type="text" name="playerName" required />
              <label>Name</label>
            </div>
            <a href="nothinf">
              <input id="submitBTN" type="submit" />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </form>
        </div>

        {/* -------------------table */}

        <Table striped bordered hover variant="dark">
          {this.state.dataPlayers.length != 0 &&
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
            </thead>}
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
                    <td>
                      <label class="like">
                        <input type="checkbox" onClick={() => this.handleCeateFav(i.player.name, i.player.photo)} />
                        <div class="hearth" />
                      </label>
                      <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
                        <path d=" 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z" />
                      </svg></td>
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
