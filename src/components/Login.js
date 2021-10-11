import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import LoginButton from "./LoginButton";

class Login extends Component {
  render() {
    return (
      <section id="header" >
        <Container>
          <Row>
            <Col xs={6}>
              <Carousel className="carouselLog" style={{ color: " #9e9e9e" }}>
              
                <Carousel.Item>
                  <img
                    className="d-block w-100"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pure_black_wallpaper.jpg/338px-Pure_black_wallpaper.jpg"     
               alt="Third slide"
                    width="20px"
                    height="20px"
                    background-color="#E6DEDD"
                  />

                  <Carousel.Caption>
                    <h3 style={{ color: " #9e9e9e" }}>
                      {" "}
                      Arthur Wharton is considered the first black professional
                      footballer in the world.
                    </h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>  */}
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pure_black_wallpaper.jpg/338px-Pure_black_wallpaper.jpg"                    alt="Third slide"
                    width="90"
                    height="400"
                    background-color="#E6DEDD"
                  />

                  <Carousel.Caption>
                    <h3 style={{ color: " #9e9e9e"  }}>
                      The first game of Basketball was played with a soccer
                      ball.
                    </h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>  */}
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pure_black_wallpaper.jpg/338px-Pure_black_wallpaper.jpg"     
                    alt="Third slide"
                    width="90"
                    height="400"
                    background-color="#E6DEDD"
                  />

                  <Carousel.Caption>
                    <h3 style={{ color: " #9e9e9e"  }}>
                      Pele was the first to call football “the beautiful game”.
                    </h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>  */}
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pure_black_wallpaper.jpg/338px-Pure_black_wallpaper.jpg"                         alt="Third slide"
                    width="90"
                    height="400"
                    background-color="#E6DEDD"
                  />

                  <Carousel.Caption>
                    <h3 style={{ color: " #9e9e9e"  }}>
                      {" "}
                      The maximum number of goals ever scored was by Stephan
                      Stanis (France) in December 1942.
                    </h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>  */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pure_black_wallpaper.jpg/338px-Pure_black_wallpaper.jpg"                         alt="Third slide"
                    width="90"
                    height="400"
                    background-color="#E6DEDD"
                  />

                  <Carousel.Caption>
                    <h3 style={{ color:  " #9e9e9e"  }}>
                      {" "}
                      Until 1913, Goalies did not wear different colored shirts
                      from their teammates.
                    </h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>  */}
                  </Carousel.Caption>
                </Carousel.Item>

              
              </Carousel>
            
           
            </Col>
          </Row>
        </Container>
         {/* <Container>
          <Row>
            <Col xs={12}>
            <p
          style={{
            backgroundImage: 'url("https://www.api-football.com/public/img/home1/hero-banner.png")',
            height: "700px", 
          }}
        ></p>
          </Col>
          </Row>
        </Container>  */}

        <LoginButton />
      </section>
    );
  }
}

export default Login;
