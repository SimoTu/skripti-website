import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import 'react-bootstrap';
import './Ads.css';
import loimu from './Ads/loimu.png';
import barplay from './Ads/barplay.jpg';
import tek from './Ads/tek.png';
import tivia from './Ads/tivia.png';
import fastroi from './Ads/fastroi.jpg';




class Ads extends Component {
  render() {

    return (

<div>

<div class="sponsors">
    <h1 class="fontAds">Yhteistyössä</h1>
      <div class="footer-container">
        <ul class="list-inline sponsorlinks">
              <li>

                <a href="https://fastroi.fi/">
                <img class="img-fluid" src={fastroi}></img></a>

                <a href="https://www.loimu.fi/">
                <img class="img-fluid " src={loimu}></img ></a>

                <a href="https://www.raflaamo.fi/fi/joensuu/bar-play-joensuu">
                <img class="img-fluid " src={barplay}></img></a>
                
                <a href="https://www.tek.fi/fi">
                <img class="img-fluid " src={tek}></img></a>

                <a href="http://tivia.fi/">
                <img class="img-fluid " src={tivia}></img></a>

              </li>

            </ul>
        </div>
    </div>


</div>

);
  }
}


export default Ads;