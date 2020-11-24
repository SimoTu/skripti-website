import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './Images/hackerman.jpg';
import './TapatumaItem.css';



export class TapahtumaItem extends Component {

  render() {


    return (
        <div class="team-member-2 grid-item">
          <h1>{this.props.mika}</h1>
          <h4>{"MISSÄ: " + this.props.missa}</h4>
          <h4>{"MILLOIN ALKAA: " + this.props.start_time}</h4>
          <h4>{"MILLOIN PÄÄTTYY: " + this.props.end_time}</h4>
          <h4>{"KUVAUS: " + this.props.teksti}</h4>
          <h4>{"INFO: " + this.props.linkki}</h4>
          <h4>{"HINTA: " + this.props.hinta}</h4>

     </div>
)
  }
}

// PropTypes
TapahtumaItem.propTypes = {
  start_time: PropTypes.string,
  end_time: PropTypes.string,
  missa: PropTypes.string,
  mika: PropTypes.string,
  linkki: PropTypes.string,
  kuva: PropTypes.string,
  teksti: PropTypes.string,
  hinta: PropTypes.string,
}

export default TapahtumaItem