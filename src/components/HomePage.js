import React, { Component } from "react";
import leaguelImg from "./img/wp3616722 (1).png";
import teamsImg from "./img/1.jpg";
import playerlImg from "./img/2.png";
import joinImg from "./img/logo-removebg-preview.png";
import fitness from "./img/istockphoto-1276373630-1024x1024.jpg";
import { Card } from "react-bootstrap";

class HomePage extends Component {
  render() {
    return (
      <>
        <h3 style={{ marginLeft: "45%" }}>Sports</h3>

        <span className="homePageSpan">
          <Card style={{ width: "18rem", margin: "30%" }}>
            <Card.Title>Legues</Card.Title>
            <Card.Link href="/Football">
              <Card.Img
                variant="top"
                src={leaguelImg}
                className="homepageImgs"
              />
            </Card.Link>
          </Card>
        </span>

        <span className="homePageSpan">
          <Card style={{ width: "18rem", margin: "30%" }}>
            <Card.Title>Teams</Card.Title>
            <Card.Link href="/teams">
              <Card.Img
                variant="top"
                src={teamsImg}
                className="homepageImgs"
              />
            </Card.Link>
          </Card>
        </span>

        <span className="homePageSpan">
          <Card style={{ width: "18rem", margin: "30%" }}>
            <Card.Title>Players</Card.Title>
            <Card.Link href="/players">
              <Card.Img
                variant="top"
                src={playerlImg}
                className="homepageImgs"
              />
            </Card.Link>
          </Card>
        </span>

        
        <div>
          <span id="fitness">
            <h3  style={{ marginLeft: "45%" , fontWeight:"bolder"}}>Fitness</h3>
            <a href="/fitness">
              <img src={fitness} className="fitness" alt="" />
            </a>
          </span>
        </div>
      </>
    );
  }
}

export default HomePage;
