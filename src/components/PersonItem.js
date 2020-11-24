import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PersonItem.css';
import logo from './Images/hackerman.jpg';



export class PersonItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {

    if (this.props.linkedIn != null) {
      var linkedin =            <li class="list-inline-item">
      <a href={this.props.linkedIn}>
      <i class="personlink fab fa-linkedin-in"></i>
      </a>
   </li>
   ;
    }

    if (this.props.facebook != null) {
      var facebook =            <li class="list-inline-item">
      <a href={this.props.facebook}>
      <i class="personlink fab fa-facebook-f"></i>
      </a>
   </li>
   ;
    }

    if (this.props.telegram != null) {
      var telegram =            <li class="list-inline-item">
      <a href={this.props.telegram}>
      <i class="personlink fab fa-telegram-plane"></i>
      </a>
   </li>
   ;
    }
    if (this.props.snapchat != null) {
      var snapchat =            <li class="list-inline-item">
      <a href={this.props.snapchat}>
      <i class="personlink fab fa-snapchat-ghost"></i>
      </a>
   </li>
   ;
    }
    if (this.props.instagram != null) {
      var instagram =            <li class="list-inline-item">
      <a href={this.props.instagram}>
      <i class="personlink fab fa-instagram"></i>
      </a>
   </li>
   ;
    }

    return (
        <div class="team-member grid-item">
        <img class="mx-auto rounded-circle" src={logo} alt=""></img>
        <h4>{this.props.firstname +" "+ this.props.lastname}</h4>
        <p class="title">{this.props.label}</p>
        <a href={"mailto:" + this.props.email} class="linkMail"><span  class="linkMail">{this.props.email}</span></a>
        <ul class="list-inline social-buttons">
        {linkedin}
        {facebook}
        {telegram}
        {instagram}
        {snapchat}
        </ul>
     </div>
)
  }
}
// PropTypes
PersonItem.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  linkedIn: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  telegram: PropTypes.string,
  snapchat: PropTypes.string,
  picture: PropTypes.string,
  info: PropTypes.string,
  label: PropTypes.string,
  email: PropTypes.string

}



export default PersonItem