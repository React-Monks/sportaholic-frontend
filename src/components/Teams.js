import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Table } from 'react-bootstrap'
class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataTeams: [],
              leagueID: 0,
            teamName: "",
        };
    }

    
    handleTeams = async (e) => {
        e.preventDefault();

        await this.setState({
            teamName: e.target[0].value,
            
        });
        let config = {
            method: "GET",
            // eslint-disable-next-line no-template-curly-in-string
            url: `https://v3.football.api-sports.io/teams?name=${this.state.teamName}`,
            // qs: { id: "33" },
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "896f2cddb7c7d8ebc3289460d4835b83",
            },
        };
        await axios(config).then((res) => {
            this.setState({
                dataTeams: res.data.response,
            });

        });
    };

    render() {
        return <>
            {/* <button onClick={this.handleTeams}>try</button> */}
            {/* <Form onSubmit={(e) => this.handleTeams(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Choose the team</Form.Label>
                    <Form.Control type="text" placeholder="Enter team name" />
                </Form.Group>

              <  Form.Select size="lg">
    <option>Manchester United</option>
    <option>LIVERPOOL</option>
    <option>Chelsea</option>


  </Form.Select>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
            <form onSubmit={(e) => this.handleTeams(e)}>
                <input type="text" ></input>
                <input type="submit" ></input>
                </form>



            {/* --------------------table---------- */}

            <Table striped bordered hover variant="dark">
           
                {/* <thead>
                    <tr>
                        <th>Date</th>
                        <th></th>
                        <th>Fixture</th>
                        <th>...</th>

                        <th>Score</th>
                    </tr>
                </thead> */}
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
                                    <td> {" "}
                                        <img
                                            //   className="d-block w-100"
                                            src={i.venue.image}
                                            alt="logo"
                                            width="90"
                                            height="90"
                                        /></td>
                                    <td>{i.venue.name}</td>

                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </Table>
        </>;
    }
}

export default Teams;
