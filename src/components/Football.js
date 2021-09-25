import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FootballCards from "./FootballCards";
import FootballTable from "./Table/FootballTable";
import {  Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

class Football extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataLives: [],
      leagueID: 0,
      date: '',

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

  //     });
  //   };

  //   ---------------------league2--------------
  handleDate = async (e) => {
    e.preventDefault();
    
    await this.setState({
      date: e.target[0].value,
    })
  }

  handleFootballLive = async (e) => {
    e.preventDefault();

  //  window.location.href = '/league';
    await this.setState({

      leagueID: e.target.value
    })
    let config = await {
      method: "GET",
      url: `https://v3.football.api-sports.io/fixtures?league=${this.state.leagueID}&season=2021&date=${this.state.date}`,
      headers: {
        "x-rapidapi-key": "4dac19a89c8f0784ef509bdbda44cf5a",

      },
    };
    await axios(config).then((res) => {
      this.setState({
        dataLives: res.data.response,
      });

    });
  };


  render() {
    return (
      <>
        <FootballCards handleFootballLive={this.handleFootballLive} />
        {/* <Router>
          <Switch>
            <Route path="/league"> */}
              <FootballTable
                handleDate={this.handleDate}
                dataLives={this.state.dataLives}
                leagueID={this.state.leagueID}
              />
            {/* </Route>
          </Switch>
        </Router> */}



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
