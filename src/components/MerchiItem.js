import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './Images/hackerman.jpg';
import './TapatumaItem.css';



export class MerchiItem extends Component {

  render() {


    return (
        <div class="team-member-2 grid-item">
          <h1>{this.props.kategoria}</h1>
          <h4>{"NIMI: " + this.props.nimi}</h4>
          <h4>{"HINTA: " + this.props.hinta}</h4>
          <h4>{"Info: " + this.props.info}</h4>
        

     </div>
)
  }
}

// PropTypes
MerchiItem.propTypes = {
  kategoria: PropTypes.string,
  nimi: PropTypes.string,
  info: PropTypes.string,
  kuva: PropTypes.string,
  hinta: PropTypes.string
 
}

export default MerchiItem