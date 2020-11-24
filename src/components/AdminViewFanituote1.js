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
import AdminView from './AdminView';
import cookies from 'js-cookie';




class AdminViewFanituote1 extends Component {




  state = {
    fanituotekategoria_id: '',
    hinta: '',
    kuva: '',
    info: '',
    nimi:''
   
    
};


validate = () => {
  let isError = false;
 

  if (this.state.hinta.length <1) {
    isError = true;
   
  }
  if (this.state.nimi.length <1) {
    isError = true;
  
  }
  
  if (this.state.info.length <1) {
    isError = true;
  
  }
  
if(isError){
  this.setState({
    ...this.state,
   
  });
}

  return isError;
};



change = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
  console.log("hyhysdaysd")
};  





onSubmit = e => {
    console.log(cookies.get("token"))
  e.preventDefault();
  // this.props.onSubmit(this.state);
  const err = this.validate();
if(!err){
  (async () => {
    const rawResponse = await fetch('http://localhost:8000/fanituotteet/', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': "Bearer "+cookies.get('token')+""
    },
      body: JSON.stringify({fanituotekategoria_id:this.state.fanituotekategoria_id, hinta: this.state.hinta, kuva: this.state.kuva, info: this.state.info, nimi: this.state.nimi})
    
    }
    
    );
    window.location.reload(true)
    const content = await rawResponse.json();
    
    
  })();

  this.setState({
    fanituotekategoria_id: '',
    hinta: '',
    info: '',
    nimi:''
 
  });
};
}

  render() {


    
    return (
        <div class ="FormStyle">
            <br></br>
            <h1>Lisää fanituote</h1>
            <br></br>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFanituoteKat">
      <Form.Label ><span>fanituotekategoria_id</span></Form.Label>
      <Form.Control type="text" placeholder="1,2,3,4,5" value ={this.state.fanituotekategoria_id}
        onChange={e => this.change(e)}
        name = "fanituotekategoria_id"
        
        />
    </Form.Group>

  </Form.Row>
  <Form.Row>

  <Form.Group as={Col} controlId="formGridHinta">
      <Form.Label>Hinta</Form.Label>
      <Form.Control type="text" placeholder="3.3" value ={this.state.hinta}
        onChange={e => this.change(e)}
        name = "hinta" />
        
    </Form.Group>
    </Form.Row>


  <Form.Row>
    <Form.Group as={Col} controlId="formGridInfo">
      <Form.Label>Info</Form.Label>
      <Form.Control type="text" placeholder="info.." value ={this.state.info}
        onChange={e => this.change(e)}
        name = "info" />
    </Form.Group>
    </Form.Row>

    <Form.Row>

    <Form.Group as={Col} controlId="formGridNimi">
      <Form.Label>Mikä</Form.Label>
      <Form.Control type="text" placeholder="hattu" value ={this.state.nimi}
        onChange={e => this.change(e)}
        name = "nimi" />
    </Form.Group>
  </Form.Row>

  


  <button type ="submit" id = "submitButton" onClick={e => this.onSubmit(e)}>Lisää fanituote</button>


  
</Form>
<br></br>

</div>);

  }
}


export default AdminViewFanituote1;