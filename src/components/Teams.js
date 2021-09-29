import React, { Component } from "react";
import axios from "axios";

import { Table, Carousel,Col, Container, Row} from "react-bootstrap";
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
        type:"team"

      }
    }
    axios(config)
    console.log(name)
  }
  
  render() {
    return (
      <>

        <div className="login-box">
          <h2>Team name</h2>
          <form  onSubmit={(e) => {
            this.handleTeams(e);
          }}>
            <div className="user-box">
              <input type="text" name="teamName" required />
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
        {/* --------------------table---------- */}

        <Table striped bordered hover variant="dark">
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
                    {" "}
                    <td><button onClick={() => this.handleCeateFav(i.team.name, i.team.logo)}>Add to favorites</button></td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>
        <br />
        {/* ----------------------------------------             */}
      
        <Container>

          <Row>
            <Col xs={9}> */}
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
            {/* </Col>
          </Row>
        </Container> */}
        <form   className="login-box" onSubmit={(e) => this.handleTeams(e)}>
        <div class="user-box">
          
          <input  
          
          type="text"></input>
          </div>
          <input id="submitBTN"   value="Search" type="submit"></input>
        </form>

        {/* --------------------table---------- */}

        <Table striped bordered hover variant="dark">
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
                    {" "}
                    <td><button onClick={() => this.handleCeateFav(i.team.name, i.team.logo)}>Add to favorites</button></td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>
        <br />
        {/* ----------------------------------------             */}
      
       

      </>
    );
  }
}

export default withAuth0(Teams);
