import React from 'react';
import ReactDOM from 'react-dom';
import './Form.css';
import cookies from 'js-cookie'


export default class LoginView extends React.Component {

    state = {
        tunnus: '',
        salasana: '',
        islogged: false
       
    };

    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };  

    onSubmit = e => {
      e.preventDefault();
      // this.props.onSubmit(this.state);
      
      (async () => {
        const rawResponse = await fetch('http://localhost:8000/admin/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({tunnus: this.state.tunnus, salasana: this.state.salasana})
        });
        const content = await rawResponse.json();
      cookies.set('token', content.token)
     if(content.success === true){
     // console.log(cookies.get('token'))
     
     this.props.handler();
     }
      
      })();
      
      this.setState({
        tunnus: '',
        salasana: ''
      
      });

      
    };
  



  render() {





    return (
      <div>
        <br></br>
      <div id = "holder">
        
      <form><p>Tunnus</p>
        <input
        name ="tunnus"
        placeholder = 'tunnus' 
        value ={this.state.tunnus}
        onChange={e => this.change(e)}        
        /><br/><br/><p>Salasana</p>
        
        <input
        type = "password"
        name = "salasana"
        placeholder = 'salasana' 
        value ={this.state.salasana}
        onChange={e => this.change(e)}
        /><br/><br/>
        <div id="buttonHolder">
        <button id = "submitButton" onClick={e => this.onSubmit(e)}>Kirjaudu</button>
        </div>
      </form>
      </div>
     

      </div>
    );
  }
}
