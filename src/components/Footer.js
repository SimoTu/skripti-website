import React, { Component } from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (

<div>
<div class="wrapper2">
<div class="wrapper">
  <br></br>
<p class="wildText"></p>
<div class="socialLinks">
<a href="https://www.linkedin.com/company/19069754"><i class="big fab fa-linkedin-in"></i></a>
<a href="https://t.me/skripti_yleinen"><i class="big fab fa-telegram-plane"></i></a>
<a href="https://discord.gg/3qUuKYA"><i class="big fab fa-discord"></i></a>
<a href="https://www.instagram.com/skriptiry/"><i class="big fab fa-instagram"></i></a>
<a href="https://www.facebook.com/skriptiry/"><i class="big fab fa-facebook-f"></i></a>
<a href="https://calendar.google.com/calendar/b/1?cid=c2tyaXB0aXJ5QGdtYWlsLmNvbQ"><i class="big fab fa-google"></i></a>
</div>
<div class="copyRights">
<p class="wildText">Copyright © Skripti ry 2020</p>
</div>
</div>

</div>

</div>

);
  }
}


export default Footer;