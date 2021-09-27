import axios from 'axios';
import React, { Component } from 'react';
class Basketball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dayGames: [],
            day: ''
        }
    }
    componentDidMount=async()=>{
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        let config =  {
            method: 'GET',
            url: `https://sports-api.cloudbet.com/pub/v2/odds/fixtures?sport=basketball&date=${today}`,
            headers: {
                "X-API-Key": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkhKcDkyNnF3ZXBjNnF3LU9rMk4zV05pXzBrRFd6cEdwTzAxNlRJUjdRWDAiLCJ0eXAiOiJKV1QifQ.eyJhY2Nlc3NfdGllciI6InRyYWRpbmciLCJleHAiOjE5NDc4NjM2NzcsImlhdCI6MTYzMjUwMzY3NywianRpIjoiZjYwZGI3YWItZjBiZi00MzE5LWFlZDUtZGViNjRmOTc4ZjJkIiwic3ViIjoiYTQ0MTk0OGUtMWYzOS00OTNhLTkxYWYtOGU1ZGY3MTZiMGMxIiwidGVuYW50IjoiY2xvdWRiZXQiLCJ1dWlkIjoiYTQ0MTk0OGUtMWYzOS00OTNhLTkxYWYtOGU1ZGY3MTZiMGMxIn0.m0RMtP5R7rSd0fFluXlQ7ENa4G4oab_HOnnPJZVFWL6jlZotf_TFwrCS2YOsctPFS-waWQ_ZI4qFjugCSN9AsK3XZnihwfHVYvbvw9LUhMfCoMkZz786pyG741DPb0l6S7PegVgSSP3BSrUkzuq-N8MP0OLO_G46uGAx9zrAUCFkg0qMVBDNoln8mm_J8RrJz6gXNUO_k97DKHbO9DaWSeQC-0Km_nI8AnZ0J4FLb2ER1AIeqHApIiDMYNaNm2GfuXV0a-UQDPsIovQCPsH4_XaCXFIxIFfQRb2KP7BL0bV4Soo4ippZUPIJpXr35CcYOYEpxQ6D1Y2VAVcZzSmOsw",
            }
        }
        await axios(config).then(res => {
            this.setState({
                dayGames: res.data.competitions
            })
        })
    }
    
    handleTodayGames = async (e) => {
        e.preventDefault();
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        let theDay = e.target[0].value !== ''? e.target[0].value : today
        await this.setState({
            day: theDay,
        })
        let config =  {
            method: 'GET',
            url: `https://sports-api.cloudbet.com/pub/v2/odds/fixtures?sport=basketball&date=${this.state.day}`,
            headers: {
                "X-API-Key": "eyJhbGciOiJSUzI1NiIsImtpZCI6IkhKcDkyNnF3ZXBjNnF3LU9rMk4zV05pXzBrRFd6cEdwTzAxNlRJUjdRWDAiLCJ0eXAiOiJKV1QifQ.eyJhY2Nlc3NfdGllciI6InRyYWRpbmciLCJleHAiOjE5NDc4NjM2NzcsImlhdCI6MTYzMjUwMzY3NywianRpIjoiZjYwZGI3YWItZjBiZi00MzE5LWFlZDUtZGViNjRmOTc4ZjJkIiwic3ViIjoiYTQ0MTk0OGUtMWYzOS00OTNhLTkxYWYtOGU1ZGY3MTZiMGMxIiwidGVuYW50IjoiY2xvdWRiZXQiLCJ1dWlkIjoiYTQ0MTk0OGUtMWYzOS00OTNhLTkxYWYtOGU1ZGY3MTZiMGMxIn0.m0RMtP5R7rSd0fFluXlQ7ENa4G4oab_HOnnPJZVFWL6jlZotf_TFwrCS2YOsctPFS-waWQ_ZI4qFjugCSN9AsK3XZnihwfHVYvbvw9LUhMfCoMkZz786pyG741DPb0l6S7PegVgSSP3BSrUkzuq-N8MP0OLO_G46uGAx9zrAUCFkg0qMVBDNoln8mm_J8RrJz6gXNUO_k97DKHbO9DaWSeQC-0Km_nI8AnZ0J4FLb2ER1AIeqHApIiDMYNaNm2GfuXV0a-UQDPsIovQCPsH4_XaCXFIxIFfQRb2KP7BL0bV4Soo4ippZUPIJpXr35CcYOYEpxQ6D1Y2VAVcZzSmOsw",
            }
        }
        await axios(config).then(res => {
            this.setState({
                dayGames: res.data.competitions
            })
        })
    }
    render() {
        console.log(this.state.dayGames);
        return (
            <div>
                <h1>Basketball</h1>
                <form onSubmit={this.handleTodayGames}>
                    <input type='date' />
                    <input type='submit' />
                </form>
                
            </div>
        )
    }
}
export default Basketball