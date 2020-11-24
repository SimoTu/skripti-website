import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Ads from './components/Ads';
import Welcome from './components/Welcome';
import React, { Component } from 'react';
import Hallitus from './components/Hallitus';
import PersonItem from './components/PersonItem';
import HallitusPage from './components/HallitusPage';
import JoinForm from './components/JoinForm';
import LoginView from './components/LoginView';
import AdminView from './components/AdminView';
import AdminView2 from './components/AdminView2';
import AdminView3 from './components/AdminView3';
import AdminViewTapahtuma1 from './components/AdminViewTapahtuma1';
import cookies from 'js-cookie'
import AdminMenu from './components/AdminMenu';
import TapahtumatPage from './components/TapahtumatPage';
import AdminViewTapahtumapoisto from './components/AdminViewTapahtumapoisto';
import TuutoriPage from './components/TuutoriPage';
import MerchPage from './components/MerchPage';
import AdminViewFanituote1 from './components/AdminViewFanituote1';
import AdminViewFanituotepoisto from './components/AdminViewFanituotepoisto';





      


function isAdmin(param) {
 
if(param) {
  return <AdminMenu />
}
  
}




class App extends Component {
  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)
  }

  handler = () => {
    console.log("haloo222")

    fetch('http://localhost:8000/admin/istokenvalid',{
      method: 'GET',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization': "Bearer "+cookies.get('token')+""
      }
    })
    .then(res => res.json())
    .then((data) => {
    console.log(data.list)
    console.log(data.list);
    if(data.list){
      this.setState({ islogged: true })
    } else {
      this.setState({ islogged: false })
    }
    })
  }
  




 state= {
   islogged: false
 }


 componentDidMount(){
   this.handler()
 }

render() {
  

  return (
    
    <BrowserRouter>
      <Menu />
      
      {isAdmin(this.state.islogged)}
      <Switch>
      <Route path="/" component={Welcome} exact/>
      <Route path="/hallitus" component={HallitusPage} exact/>
      <Route path="/liity" component={JoinForm} exact/>
      
      <Route path="/login" render={ () => <LoginView handler = {this.handler}/> } />
      <Route path="/view/maksamattomat" component={AdminView} exact/>
      <Route path="/view/hyvaksymattomat" component={AdminView2} exact/>
      <Route path="/view/jasenet" component={AdminView3} exact/>
      <Route path="/view/tapahtumat" component={AdminViewTapahtuma1} exact/>
      <Route path="/view/tapahtumat/poista" component={AdminViewTapahtumapoisto} exact/>
      <Route path="/view/fanituotteet" component={AdminViewFanituote1} exact/>
      <Route path="/view/fanituotteet/poista" component={AdminViewFanituotepoisto} exact/>
      <Route path="/kalenteri" component={TapahtumatPage} exact/>
      <Route path="/tuotteet" component={MerchPage} exact/>
      <Route path="/fuksit" component={TuutoriPage} exact/>

      </Switch>
      <Ads />
      <Footer />
    </BrowserRouter> 
  );
  }
}

export default App;
