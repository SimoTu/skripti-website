import React, { Component } from 'react';
import 'react-bootstrap';
import Merchit from './Merchit';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class MerchPage extends Component {
    state = {
        fanituotteet: []
      };
    
      componentDidMount() {
   
        fetch('http://localhost:8000/fanituotteet/joined',{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
            }
    })
        .then(res => res.json())
        .then((data) => {
          this.setState({ fanituotteet: data.list })
        })
        .catch(console.log)
      }
    


  render() {
    return (

<div class="grid-container">

<Merchit fanituotteet={this.state.fanituotteet} />

</div>

);
  }
}


export default MerchPage;