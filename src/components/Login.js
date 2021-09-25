import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from "react";
// import axios from "axios";
import LoginButton from "./LoginButton";
// import {Button,Card } from "react-bootstrap";

class Login extends Component {
  
  // -----------------------
  // handlesports =async (e) => {
  //   e.preventDefault();
  //   // let config = {
  //   //   method: "GET",
  //   //   url: `http://localhost:8000/sports`
  //   // };

  //   await axios.get(`http://${process.env.REACT_APP_BACKENED_URL}/sports`).then((res) => {
  //     this.setState({
  //       sportsData: res.data,
  //       // showData: true,
  //     });
  //     console.log(res.data)
  //   })
    
  // };

  // -----------------------------
  render() {
    
    return (
    
<>



<Container>
            <Row>
              <Col xs={6}>
                              <Carousel>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
      alt="Third slide"
      width="90"
      height="400"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
      alt="Third slide"
      width="90"
      height="400"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1591626326733-4a5eb70d33fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      alt="Third slide"
      width="90"
      height="400"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
      alt="Third slide"
      width="90"
      height="400"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item><Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1580153111806-5007b971dfe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      alt="Third slide"
      width="90"
      height="400"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1510698454686-1e2552e058e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
      alt="Third slide"
      width="90"
      height="400"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Col>
            </Row>
          </Container>      



{/* ----------------------------- */}
{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>sports</Card.Title>
    <Card.Text>
    {this.state.data.map((i) => {
                return (
                  <>
                    <h3>sports</h3>
                    <p> {i.sportsData.strSport}</p>
                    </>
                    )   })}
    </Card.Text>
    <Button variant="primary" onClick= {this.handlesports}>Go somewhere</Button>
  </Card.Body>
</Card> */}
        <LoginButton />

      </>
    );
  }
}

export default Login;
