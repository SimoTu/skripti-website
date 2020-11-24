import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import 'react-bootstrap';
import './Welcome.css';
import hackerman from './Images/hackerman2.jpg';
import logo from './Images/logoharmaa.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './JoinForm.css';
import { InputGroupCheckbox } from 'react-bootstrap/InputGroup';
import { format } from 'path';




class JoinForm extends Component {




  state = {
    firstName: '',
    firstNameError: "2",
    lastName: '',
    lastNameError: "",
    kotipaikka: '',
    kotipaikkaError: "",
    email: '',
    emailError: "",
    jasentyyppi:'1',
    aloitusvuosi: '',
    aloitusvuosiError: "",
    tiedotus: '1'
    
};


validate = () => {
  let isError = false;
  const errors = {
    firstNameError: "",
    lastNameError: "",
    kotipaikkaError: "",
    emailError: "",
    aloitusvuosiError: ""
  };

  if (this.state.firstName.length <1) {
    isError = true;
    errors.usernameError = "Syötä etunimi";
  }
  if (this.state.lastName.length <1) {
    isError = true;
    errors.lastnameError = "Syötä sukunimi";
  }
  if (this.state.kotipaikka.length <1) {
    isError = true;
    errors.kotipaikkaError = "Syötä kotipaikka";
  }
  if (this.state.email.length <5) {
    isError = true;
    errors.emailError = "Syötä sähköposti";
  }
  if (this.state.aloitusvuosi.length ==!4) {
    isError = true;
    errors.aloitusvuosiError = "Syötä aloitusvuosi";
  }

  if (this.state.email.indexOf("@") === -1) {
    isError = true;
    errors.emailError = "Syötä toimiva sähköposti";
  }
if(isError){
  this.setState({
    ...this.state,
    ...errors
  });
}

  return isError;
};





toggleChange = () => {
  if(this.state.tiedotus==='0'){
    this.setState({
      tiedotus: '1',
      
    });
  //  console.log("nyt 1")
  }
    else if(this.state.tiedotus==='1') {
      this.setState({
        tiedotus: '0',
      });
    //  console.log("nyt 0")
    }
  }



change = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
  console.log("hyhysdaysd")
};  





onSubmit = e => {
  e.preventDefault();
  // this.props.onSubmit(this.state);
  const err = this.validate();
if(!err){
  (async () => {
    const rawResponse = await fetch('http://localhost:8000/jasenrekisteri/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({firstName: this.state.firstName, lastName: this.state.lastName , kotipaikka: this.state.kotipaikka, email: this.state.email, jasentyyppi:this.state.jasentyyppi, aloitusvuosi:this.state.aloitusvuosi, tiedotus:this.state.tiedotus})
    
    }
    
    );
    window.location.reload(true)
    const content = await rawResponse.json();
    
    
  })();

  this.setState({
    firstName: '',
    lastName: '',
    kotipaikka: '',
    email: '',
    jasentyyppi:'',
    aloitusvuosi: '',
    tiedotus: ''
 
  });
};
}

  render() {


    
    return (
        <div class ="FormStyle">
            <br></br>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label ><span>Etunimi</span></Form.Label>
      <Form.Control type="text" placeholder="Erkki" value ={this.state.firstName}
        onChange={e => this.change(e)}
        name = "firstName"
        
        />
         <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
    </Form.Group>

  </Form.Row>
  <Form.Row>

  <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Sukunimi</Form.Label>
      <Form.Control type="string" placeholder="Esimerkki" value ={this.state.lastName}
        onChange={e => this.change(e)}
        name = "lastName" />
        
    </Form.Group>
    </Form.Row>


  <Form.Row>
    <Form.Group as={Col} controlId="formGridHomeTown">
      <Form.Label>Kotipaikkakunta</Form.Label>
      <Form.Control type="string" placeholder="Joensuu" value ={this.state.kotipaikka}
        onChange={e => this.change(e)}
        name = "kotipaikka" />
    </Form.Group>
    </Form.Row>

    <Form.Row>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Sähköposti</Form.Label>
      <Form.Control type="email" placeholder="Erkki@gmail.com" value ={this.state.email}
        onChange={e => this.change(e)}
        name = "email" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group controlId="formGridType">
    <Form.Label>Jäsentyyppi</Form.Label>
    <Form.Control as="select"  onChange={e => this.change(e)} value={this.state.jasentyyppi} name='jasentyyppi'>
      <option value ={'1'}  name = "jasentyyppi1" >Opiskelijajäsen</option>
      <option value ={'2'}  name = "jasentyyppi2"  >Kannatusjäsen</option>
      <option value ={'3'}  name = "jasentyyppi3"  >Yhteisöjäsen</option>
    </Form.Control>




  </Form.Group>  
  </Form.Row>
    <Form.Row>


    <Form.Group as={Col} controlId="formGridStartYear">
      <Form.Label>Opintojen aloitusvuosi</Form.Label>
      <Form.Control type="number" placeholder="2020" value ={this.state.aloitusvuosi}
        onChange={e => this.change(e)}
        name = "aloitusvuosi" />
      
    </Form.Group>

</Form.Row>




  <Form.Group id="formGridCheckbox1">
    <Form.Check type="checkbox" defaultChecked={true} onChange={this.toggleChange} label="Haluan liittyä Skripti ry:n postituslistalle." />
  </Form.Group>
  <Form.Group id="formGridCheckbox2">
    <Form.Check type="checkbox" label="Hyväksyn jäsenrekisterin ehdot ja vakuutan tietoni oikeiksi * "/>
    <button type ="submit" id = "submitButton" onClick={e => this.onSubmit(e)}>ADD</button>
  </Form.Group>
 





  
</Form>
<br></br>

</div>);

  }
}


export default JoinForm;