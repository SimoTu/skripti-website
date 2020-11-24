import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import 'react-bootstrap';
import './Menu.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import cookies from 'js-cookie'


function logout() {
  
  cookies.set('token', 'invalid');
  
  window.location.reload(true)
  this.props.history.push("/")
  
 
  }

class AdminMenu extends Component {
  render() {
    return (
<Navbar className="font space nav" collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand className="font space" href="#home"><Link className="dropFont font" to="/"><span class="font">Admin menu</span></Link></Navbar.Brand>
  <Navbar.Toggle className="font" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    <Nav.Link className="extra-space"></Nav.Link>


    <NavDropdown className="space font testWidth" title={<span className="font">Tapahtumat   </span>} id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="dropFont font" to="/view/tapahtumat">Lisää tapahtumia</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="dropFont font" to="/view/tapahtumat/poista">Poista tapahtumia</Link></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown className="space font testWidth" title={<span className="font">Fanituotteet   </span>} id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="dropFont font" to="/view/fanituotteet">Lisää fanituotteita</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="dropFont font" to="/view/fanituotteet/poista">Poista fanituote</Link></NavDropdown.Item>
      </NavDropdown>


      <NavDropdown className="space font testWidth" title={<span className="font">Jäsenet</span>} id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="dropFont font" to="/view/maksamattomat">Varmista jäsenmaksuja</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="dropFont font" to="/view/hyvaksymattomat">Hyväksy jäseniä</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="dropFont font" to="/view/jasenet">Erota jäseniä</Link></NavDropdown.Item>
      </NavDropdown>


    </Nav>
    <Nav>
      <Nav.Link className="space"><Link className="font space" onClick={()=>logout()} to="/">Log Out </Link></Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
    );
  }
}


export default AdminMenu;