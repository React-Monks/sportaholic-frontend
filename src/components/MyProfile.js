import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {
    Container,
    Row,
    Col,
    Tabs,
    Tab
} from 'react-bootstrap'


class MyProfile extends Component {

    
    render() {
        console.log(this.props.auth0.user)
        return (
            <Container>
                <Row>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6">
                        <div className="px-4">
                            <img
                                alt="..."
                                className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                src={`${this.props.auth0.user.picture}`}
                                style={{ width: "220px", height: '220px' }}
                            />
                            <div className="pt-4 text-center">
                                <h5 className="title">
                                    <span className="d-block mb-1">{this.props.auth0.user.name}</span>
                                    <small className="h6 text-muted">{this.props.auth0.user.email}</small>
                                </h5>

                            </div>
                        </div>
                    </Col>
                    <Col className="mb-5 mb-lg-0" lg="3" md="6" style={{ width:'50%'}}>
                        
                            
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" style={{ fontSize:'30px'}}>
                                <Tab eventKey="favorites" title="Favorites" >
                                   
                                </Tab>

                                <Tab eventKey="articles" title="Articles">
                                   
                                </Tab>
                               
                            </Tabs>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withAuth0(MyProfile)
