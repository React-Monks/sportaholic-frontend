import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import {  Col,  Table } from "react-bootstrap";

import "./League.css";
import styled from "styled-components";
import { NikeCard } from "./nikeCard";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;



class Football extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataLives: [],
      leagueID: 0,
      date: "",
      news: [],

    };
  }



  handleArticleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND}/createArticle`,
      data: {
        userName: this.props.auth0.user.name,
        userEmail: this.props.auth0.user.email,
        text: e.target.article.value,
        title: e.target.title.value
      }
    };
    axios(config).then((res) => {
      this.setState({
        data: res.data,
      });
    });
  };
  componentDidMount = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=84de0022efa34366b36042c640ef7fd9"
      )
      .then((res) => {
        this.setState({
          news: res.data.articles,
        });
      });
    let config = {
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND}/article`,
    };
    axios(config).then((res) => {
      this.setState({
        data: res.data,
      });
    });
  };
  render() {
    return (
      <>
        <div className="row">
          <Col>
            <AppContainer>
              <NikeCard imgUrl="https://media.api-sports.io/football/leagues/2.png"
                leagueName="UEFA Champions League"
                link="/league/2" />
            </AppContainer>
          </Col>
          <Col>
            <AppContainer>
              <NikeCard imgUrl="https://media.api-sports.io/football/leagues/39.png"
                leagueName="Premier League"
                link="/league/39" />
            </AppContainer>
          </Col>
          <Col>
            <AppContainer>
              <NikeCard imgUrl="https://media.api-sports.io/football/leagues/140.png"
                leagueName="La Liga"
                link="/league/140" />
            </AppContainer>
          </Col>
          <Col>
            <AppContainer>
              <NikeCard imgUrl="https://media.api-sports.io/football/leagues/78.png"
                leagueName="Bundesliga 1"
                link="/league/78" />
            </AppContainer>
          </Col>
        </div>


        {/* ------------------------------- */}


        
        <h3 className="tableID">Latest News</h3>

        <Table className="tableID"  >
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
                        width="150"
                        height="150"
                      />
                    </td>
                    <td><b>{i.title}</b><br />{i.content}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        
        <tr style={{width:"100%"}}>
          <td colSpan="2">
        <h2>Users articles</h2>
        </td>
        </tr>
          {this.state.data.map((article) => {
            return (
              <tr>
                <th>{article.userName}</th>
                <td><b>{article.title}</b><br />{article.text}</td>
              </tr>
            );
          })}
        

        </Table>
      
{/* #################################################### */}



{/* ########################################## */}
        <div className="login-box">
          <h2>Write Article</h2>
          <form  onSubmit={(e) => {
            this.handleArticleSubmit(e);
          }}>
            <div class="user-box">
              <input type="text" name="title" required />
              <label>Title</label>
            </div>
            <div class="user-box">
              <input type="text" name="article" required />
              <label>Article</label>
            </div>
            
            <a>
            <input id="submitBTN" type="submit"/>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              
            </a>
            
          </form>
        </div>
      </>
    );
  }
}

export default withAuth0(Football);
