import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";

class FootballTable extends Component {
    render() {
        return (<>

            <Form onSubmit={(e)=> this.props.handleDate(e)}>
                <input type ='date' />
                <input type ='submit' />
            </Form>
            
                 <Table striped bordered hover variant="dark">
          {(this.props.leagueID == 0) ? '' : (


          <thead>
            <tr>
              <th>Date</th>
              <th></th>
              <th>Fixture</th>
              <th>...</th>

              <th>Score</th>
            </tr>
          </thead>
          )
          }
          {this.props.dataLives.map((i) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>{i.fixture.date}</td>
                    <td>{i.fixture.status.long}</td>
                    <td>
                      {" "}
                      <img
                        //   className="d-block w-100"
                        src={i.teams.home.logo}
                        alt="logo"
                        width="90"
                        height="90"
                      />
                      {i.teams.home.name} VS {i.teams.away.name}
                      <img
                        //   className="d-block w-100"
                        src={i.teams.away.logo}
                        alt="logo"
                        width="90"
                        height="90"
                      />
                    </td>
                    <td>{i.league.name}</td>
                    <td>
                      {i.score.fulltime.home} : {i.score.fulltime.away}
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </Table>
        </>
        )
    }
}

export default FootballTable
