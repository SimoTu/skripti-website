import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import 'react-bootstrap';
import './Menu.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
<Navbar className="font space nav" collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand className="font space" href="#home"><Link className="dropFont font" to="/"><span class="logo">Skripti ry</span></Link></Navbar.Brand>
  <Navbar.Toggle className="font" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    <Nav.Link className="extra-space"></Nav.Link>


    <NavDropdown className="space font testWidth" title={<span className="font">Virallista <span> <i class="faaa fas fa-paperclip"></i></span></span>} id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link className="dropFont font" to="/yhdistys">Yhdistys</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="dropFont font" to="/yhteystiedot">Yhteystiedot</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="dropFont font" to="/hallitus">Hallitus</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="dropFont font" to="/asiakirjat">Asiakirjat</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className="dropFont font" to="/historia">Historia</Link></NavDropdown.Item>
      </NavDropdown>

      <Nav.Link className="space"><Link className="font space" to="/kalenteri">Kalenteri   <span><i class="faaa far fa-calendar-alt"></i></span></Link></Nav.Link>

      <NavDropdown className="space font" title={<span className="font">Opiskelijat <span><i class="faaa fas fa-graduation-cap"></i></span></span>} id="collasible-nav-dropdown">
      <NavDropdown.Item ><Link className="dropFont font" to="/aj">Ainejärjestötila</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link className="dropFont font" to="/haalarimerkit">Haalarimerkit</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link className="dropFont font" to="/tuotteet">Kannatustuotteet</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link className="dropFont font" to="/viestinta">Sosiaalinen media</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link className="dropFont font" to="/tyopaikat">Yhteistyökumppanit</Link></NavDropdown.Item>
      </NavDropdown>

      <Nav.Link className="space"><Link className="font space" to="/fuksit">Fuksit <span><i class="faaa fas fa-child"></i></span></Link></Nav.Link>
      <Nav.Link className="space"><Link className="font space" to="/yritykset">Yritykset <span><i class="faaa fas fa-briefcase"></i></span></Link></Nav.Link>
      <Nav.Link className="space"><Link className="font space" to="/liity">Jäseneksi <span><i class="faaa fas fa-gem"></i></span></Link></Nav.Link>


    </Nav>
    <Nav>
      <Nav.Link className="space"><Link className="font space" to="/login">Admin <span><i class="faaa fas fa-sign-in-alt"></i></span></Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}


export default Menu;