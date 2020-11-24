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




class AdminViewTapahtuma1 extends Component {




  state = {
    start_time: '',
    end_time: '',
    missa: '',
    mika: '',
    linkki:'',
    kuva: '',
    teksti: '',
    hinta:''
    
};


validate = () => {
  let isError = false;
 

  if (this.state.start_time.length <1) {
    isError = true;
   
  }
  if (this.state.end_time.length <1) {
    isError = true;
  
  }
  
  if (this.state.missa.length <1) {
    isError = true;
  
  }
  if (this.state.mika.length <1) {
    isError = true;
   
  }
  if (this.state.hinta.length <1) {
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
    const rawResponse = await fetch('http://localhost:8000/tapahtumat/', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': "Bearer "+cookies.get('token')+""
    },
      body: JSON.stringify({startTime: this.state.start_time, endTime: this.state.end_time , missa: this.state.missa, mika: this.state.mika, linkki:this.state.linkki, kuva:this.state.kuva, teksti:this.state.teksti, hinta:this.state.hinta})
    
    }
    
    );
    window.location.reload(true)
    const content = await rawResponse.json();
    
    
  })();

  this.setState({
    start_time: '',
    end_time: '',
    missa: '',
    mika: '',
    linkki:'',
    kuva: '',
    teksti: '',
    hinta:''
 
  });
};
}

  render() {


    
    return (
        <div class ="FormStyle">
            <br></br>
            <h1>Lisää Tapahtuma</h1>
            <br></br>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridAloitusPvm">
      <Form.Label ><span>Aloituspvm</span></Form.Label>
      <Form.Control type="text" placeholder="Aloituspvm (YYYY-MM-DD-HH-MM-SS)" value ={this.state.start_time}
        onChange={e => this.change(e)}
        name = "start_time"
        
        />
    </Form.Group>

  </Form.Row>
  <Form.Row>

  <Form.Group as={Col} controlId="formGridLopetusPvm">
      <Form.Label>Lopetuspvm</Form.Label>
      <Form.Control type="text" placeholder="Lopetuspvm (YYYY-MM-DD-HH-MM-SS)" value ={this.state.end_time}
        onChange={e => this.change(e)}
        name = "end_time" />
        
    </Form.Group>
    </Form.Row>


  <Form.Row>
    <Form.Group as={Col} controlId="formGridMissa">
      <Form.Label>Missä</Form.Label>
      <Form.Control type="text" placeholder="Metria" value ={this.state.missa}
        onChange={e => this.change(e)}
        name = "missa" />
    </Form.Group>
    </Form.Row>

    <Form.Row>

    <Form.Group as={Col} controlId="formGridMika">
      <Form.Label>Mikä</Form.Label>
      <Form.Control type="text" placeholder="sitsit" value ={this.state.mika}
        onChange={e => this.change(e)}
        name = "mika" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridLink">
      <Form.Label>Mikä</Form.Label>
      <Form.Control type="text" placeholder="facebook/juhlat" value ={this.state.linkki}
        onChange={e => this.change(e)}
        name = "linkki" />
    </Form.Group>
  </Form.Row>


  

  <Form.Row>
    <Form.Group as={Col} controlId="formGridInfo">
      <Form.Label ><span>Lisätietoja</span></Form.Label>
      <Form.Control type="text" placeholder="juhlat" value ={this.state.teksti}
        onChange={e => this.change(e)}
        name = "teksti"
        
        />
    </Form.Group>

  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridPrice">
      <Form.Label ><span>Hinta</span></Form.Label>
      <Form.Control type="text" placeholder="12e" value ={this.state.hinta}
        onChange={e => this.change(e)}
        name = "hinta"
        
        />
    </Form.Group>

  </Form.Row>



  <button type ="submit" id = "submitButton" onClick={e => this.onSubmit(e)}>Lisää tapahtuma</button>


  
</Form>
<br></br>

</div>);

  }
}


export default AdminViewTapahtuma1;