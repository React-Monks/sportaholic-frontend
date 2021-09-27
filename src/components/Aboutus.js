
import React from "react";

import team1 from "../components/img/36f75d87668f0a3fe0e5ebff7e4e4364.jpg";
import team2 from "../components/img/36f75d87668f0a3fe0e5ebff7e4e4364.jpg";
import team3 from "../components/img/36f75d87668f0a3fe0e5ebff7e4e4364.jpg";
import team4 from "../components/img/36f75d87668f0a3fe0e5ebff7e4e4364.jpg";


import {
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";




class Aboutus extends React.Component {
  render() {
    return (
      <>
        <main ref="main">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The amazing Team</h2>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team1}
                      style={{ width: "220px",height:'220px'}}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Web Developer</small>
                      </h5>
                     
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team2}
                      style={{ width: "220px",height:'220px'}}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Marketing Strategist
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team3}
                      style={{ width: "220px",height:'220px'}}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">UI/UX Designer</small>
                      </h5>
                      
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={team4}
                      style={{ width: "220px",height:'220px'}}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Founder and CEO</small>
                      </h5>
                      <div >
                        
                        
                        <Button
                          href="https://github.com/Anas-Abuhatab"
                          onClick={e => e.preventDefault()}
                        >
                          <i class={"fa fa-github"} style={{fontSize:28,color:"#FC46AA"}}></i>

                        </Button>

                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          
          
          
          
        </main>
        <div>
           <h1> 
             <i className="fa fa-github" ></i>
             </h1>
             </div>
      </>
          
    );
  }
}

export default Aboutus;
