import React, { Component } from 'react';
import FootballTable from './Table/FootballTable';
import axios from "axios";
 class League extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          dataLives: [],
          leagueID: 0,
          date: '',
          news:[],

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
        "x-rapidapi-key": process.env.REACT_APP_APIFOOTBAL
      }
    };
    await axios(config).then((res) => {
      this.setState({
          dataLives: res.data.response,
          
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
            "x-rapidapi-key": process.env.REACT_APP_APIFOOTBAL,
          },
        };
        await axios(config).then((res) => {
          this.setState({
            dataLives: res.data.response
          });
          
        });
    }
    // -----------------------
  
    
   render() {
      
        
        return (
<>
{this.state.leagueName}
            <FootballTable
            dataLives={this.state.dataLives}
            leagueID={this.props.match.params.id}
            handleTodayGames={this.handleTodayGames}/>

         
          </>
        )
    }
}

export default League
