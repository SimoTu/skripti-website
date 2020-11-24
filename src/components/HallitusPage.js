import React, { Component } from 'react';
import 'react-bootstrap';
import './HallitusPage.css';
import Hallitus from './Hallitus';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import cookies from 'js-cookie'

class HallitusPage extends Component {
    state = {
        persons: []
      };
    


      componentDidMount() {
   
        fetch('http://localhost:8000/persons/current',{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': "Bearer "+cookies.get('token')+""
            }
    })
        .then(res => res.json())
        .then((data) => {
          this.setState({ persons: data.list })
        })
        .catch(console.log)
      }
    



  render() {
    return (

<div class="grid-container">

<Hallitus persons={this.state.persons} />

</div>

);
  }
}


export default HallitusPage;