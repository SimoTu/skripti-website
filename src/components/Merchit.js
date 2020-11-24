import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MerchiItem from './MerchiItem';


class Merchit extends Component {
  render() {
    return this.props.fanituotteet.map((fanituote) => (
      <MerchiItem 
      kategoria ={fanituote.kategoria} 
      nimi = {fanituote.nimi}
      hinta = {fanituote.hinta} 
      info = {fanituote.info}
     
      />
    ));
  }
}

// PropTypes
Merchit.propTypes = {
  fanituotteet: PropTypes.array.isRequired
}

export default Merchit;