import React, { Component } from 'react';
import FootballTable from './Table/FootballTable';
import axios from "axios";
import tableData from '../components/localfixturesData/data.json';
import { Table } from 'react-bootstrap';
import Football from './Football';

 class League extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          dataLives: [],
          leagueID: 0,
          date: '',
          news:[]
        };
    }
    
componentDidMount=async ()=>{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    let config = await {
      method: "GET",
      url: `https://v3.football.api-sports.io/fixtures?league=${this.props.match.params.id}&season=2021&date=${today}`,
      headers: {
        "x-rapidapi-key": "4dac19a89c8f0784ef509bdbda44cf5a"
      }
    };
    await axios(config).then((res) => {
      this.setState({
        dataLives: tableData.response,
        //   dataLives: res.data.response,
      });
      
    });
  };
  handleTodayGames = async (e) => {
    e.preventDefault();
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    let theDay = e.target[0].value !== '' ? e.target[0].value : today
    await this.setState({
      day: theDay,
    })
    let config =  {
        method: 'GET',
        url: `https://v3.football.api-sports.io/fixtures?league=${this.props.match.params.id}&season=2021&date=${this.state.day}`,
        headers: {
            "x-rapidapi-key": "4dac19a89c8f0784ef509bdbda44cf5a",
          },
        };
        await axios(config).then((res) => {
          this.setState({
            dataLives : tableData.response,
            // dataLives: res.data.response,
          });
          console.log(this.dataLives);
          
        });
    }
    // -----------------------
  
    componentDidMount = () => {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=84de0022efa34366b36042c640ef7fd9"
        )
        .then((res) => {
          this.setState({
            news: res.data.articles,
          });
          console.log(res.data.articles);
        });
    };

    render() {
        
        return (
<>
            <h1>Legue Page</h1>
<Football/>
            <FootballTable
            dataLives={this.state.dataLives}
            leagueID={this.props.match.params.id}
            handleTodayGames={this.handleTodayGames}/>

            {/* ------------------------------- */}
            <Table striped bordered hover>
          {this.state.news.map((i) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <img
                        //   className="d-block w-100"
                        src={i.urlToImage}
                        alt="logo"
                        width="90"
                        height="90"
                      />
                    </td>
                    <td>{i.title}</td>

                    <td>{i.author}</td>
                    <td>{i.description}</td>

                    <td>{i.publishedAt}</td>
                    <td>{i.content}</td>
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

export default League
