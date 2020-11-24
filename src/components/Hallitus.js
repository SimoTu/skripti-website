import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonItem from './PersonItem';


class Hallitus extends Component {
  render() {
    return this.props.persons.map((person) => (
      <PersonItem
       lastname ={person.lastname}
       firstname = {person.firstname}
       label = {person.label}
       email = {person.email}
       linkedIn = {person.linkedIn}
       facebook = {person.facebook}
       instagram = {person.instagram}
       telegram = {person.telegram}
       snapchat = {person.snapchat}/>
    ));
  }
}

// PropTypes
Hallitus.propTypes = {
  persons: PropTypes.array.isRequired,
}

export default Hallitus;