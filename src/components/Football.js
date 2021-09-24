import React, { Component } from 'react';
import axios from 'axios';

 class Football extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data:"",
          showData:false,
        
        }
      }
      handleSubmit = (e) => {
        e.preventDefault();
        let config = {
          method: "GET",
          baseURL: "https://www.scorebat.com/video-api/v3/"
        }
      
        axios(config).then(res => {
            this.setState({
            data: res.data,
        showData: true
            
      
          })
        }
         ) }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Football
