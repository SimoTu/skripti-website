import React, { Component } from 'react';
import 'react-bootstrap';
import Tapahtumat from './Tapahtumat';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class TapahtumatPage extends Component {
    state = {
        tapahtumat: []
      };
    
      componentDidMount() {
   
        fetch('http://localhost:8000/tapahtumat/future',{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
            }
    })
        .then(res => res.json())
        .then((data) => {
          this.setState({ tapahtumat: data.list })
        })
        .catch(console.log)
      }
    


  render() {
    return (

<div class="grid-container">

<Tapahtumat tapahtumat={this.state.tapahtumat} />

</div>

);
  }
}


export default TapahtumatPage;