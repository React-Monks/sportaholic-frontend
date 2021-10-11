import React, { Component } from "react";
import axios from "axios";
import './Heart.scss'
import { Table, Carousel, Col, Container, Row } from "react-bootstrap";
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
      teamName: e.target.teamName.value,
    });
    let config = {
      method: "GET",
      // eslint-disable-next-line no-template-curly-in-string
      url: `https://v3.football.api-sports.io/teams?name=${this.state.teamName}`,
      // qs: { id: "33" },
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.REACT_APP_APIFOOTBAL,
      },
    };
    await axios(config).then((res) => {
      this.setState({
        dataTeams: res.data.response,
      });
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
        type: "team"

      }
    }
    axios(config)
    console.log(name)
  }

  render() {
    console.log(this.state.dataTeams);
    return (
      <>
        <Container className="conTeams">

          <Row>
            <Col xs={9}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.realmadrid.com/StaticFiles/RealMadridResponsive/images/static/og-image.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Real Madrid</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://pbs.twimg.com/media/EWl6qGgXQAAIBHv.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Manchester United</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i2-prod.mirror.co.uk/incoming/article796584.ece/ALTERNATES/s482b/298x198_Liverpool.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>liverpool</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* -------------------------- */}
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://img.btolat.com/news/large/249180.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>liverpool</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.almrsal.com/wp-content/uploads/2020/10/1-70.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://arabic.sport360.com/wp-content/uploads/2017/12/Juventus-Logo-20141589.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://storage.googleapis.com/jarida-cdn/images/1607275005640810700/1607279110000/640x480.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.aljazeera.net/wp-content/uploads/2017/12/217a7498-ac7e-4222-a919-ed8f3c326df0.jpeg?resize=686%2C513"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://arabic.sport360.com/wp-content/uploads/2016/07/Borussia-Dortmund-Logo-203366998.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>

        <div className="login-box" style={{ marginTop: "25%" }}>
          <h2>Team name</h2>
          <form onSubmit={(e) => {
            this.handleTeams(e);
          }}>
            <div className="user-box">
              <input type="text" name="teamName" required />
              <label>Name</label>
            </div>

            <a href={() => false}>
              <input id="submitBTN" type="submit" />
              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </a>

          </form>
        </div>
        {/* --------------------table---------- */}

        <Table striped bordered hover variant="dark">
         {this.state.dataTeams.length !== 0 &&
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>country</th>
              <th>Since</th>
              <th>Stadium capacity</th>
              <th>City</th>
              <th>Stadium</th>
              <th>Stadium Name</th>
              <th>Favorites</th>
            </tr>
          </thead>}
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
                    {" "}
                    <td ><label class="like">
                      <input type="checkbox"  onClick={() => this.handleCeateFav(i.team.name, i.team.logo)} />
                      <div class="hearth" />
                    </label>
                      <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
                        <path d=" 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z" />
                      </svg>
                  </td>
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

export default withAuth0(Teams);
