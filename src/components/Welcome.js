import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import 'react-bootstrap';
import './Welcome.css';
import hackerman from './Images/hackerman2.jpg';
import logo from './Images/logoharmaa.png';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Welcome extends Component {
  render() {

    return (

<div class="main">
<div class="intro">
    
<img class ="logoImage" src={logo}></img>

    <h1 class="introFont">Tietojenkäsittelytieteen opiskelijat - skripti ry</h1><br>
    </br><br></br>
    <span><Link class="liity" to="/liity">Jäseneksi</Link></span>
    </div>

      


</div>

);
  }
}


export default Welcome;