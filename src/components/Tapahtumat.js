import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TapahtumaItem from './TapahtumaItem';


class Tapahtumat extends Component {
  render() {
    return this.props.tapahtumat.map((tapahtuma) => (
      <TapahtumaItem start_time ={tapahtuma.end_time} 
      end_time = {tapahtuma.end_time}
      missa = {tapahtuma.missa} 
      mika = {tapahtuma.mika}
      linkki = {tapahtuma.linkki}
      kuva = {tapahtuma.kuva}
      teksti = {tapahtuma.teksti}
      hinta = {tapahtuma.hinta}
      />
    ));
  }
}

// PropTypes
Tapahtumat.propTypes = {
  tapahtumat: PropTypes.array.isRequired
}

export default Tapahtumat;