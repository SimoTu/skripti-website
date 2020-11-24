import React,{Component} from 'react';
import './Table.css';
import './Toast.holder.css';
import cookies from 'js-cookie'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export class AdminView extends Component {
   
  
    state = {
        userlist: []
      }



  componentDidMount() {
   
    fetch('http://localhost:8000/jasenrekisteri/nykyiset',{
        method: 'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': "Bearer "+cookies.get('token')+""
        }
})
    .then(res => res.json())
    .then((data) => {
      this.setState({ userlist: data.list })
    })
    .catch(console.log)
  }




    render() {
     
      


        function erota(id) {
          
            
                fetch('http://localhost:8000/jasenrekisteri/erota/',{
                    method: 'PUT',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'authorization': "Bearer "+cookies.get('token')+""
                    },
                    body: JSON.stringify({jasen_id: id})
            })
                .then(res => res.json())
                .then((data) => {
                  this.setState({ userlist: data.list })
                })
                .catch(console.log)
                window.location.reload(true)
              }

           

        
           
           
        
          
     
        return (
          <div class="wrapwrap">
           
          <h1>Erota jäsen</h1>

          
          <table className="table" id="table1">
<tbody>
          <tr>
            <th>ID</th>
            <th>Etunimi</th>
            <th>Sukunimi</th>
            <th>Jasentyyppi</th>
            <th>Kotipaikka</th>
            <th>Email</th>
            <th>Maksu</th>
            <th>Aloitusvuosi</th>
            <th>Hyväksytty</th>
            <th>Eronnut</th>
            <th>Tiedotus</th>
            <th>Erota Jäsen</th>

          </tr>
            
          {this.state.userlist.map((user) => (
             
                  <tr>
                  <td>{user.jasen_id}</td>
                  <td>{user.etunimi}</td>
                  <td>{user.sukunimi}</td>
                  <td>{user.jasentyyppi_id}</td>
                  <td>{user.kotipaikka}</td>
                  <td>{user.email}</td>   
                  <td>{user.maksu}</td>
                  <td>{user.aloitusvuosi}</td>
                  <td>{user.hyvaksytty}</td>
                  <td>{user.eronnut}</td>
                  <td>{user.tiedotus}</td>
                  <td><button onClick ={()=>erota(user.jasen_id)}>Erota</button></td>
                </tr>
      
              ))}
</tbody>
            </table>
            
            
               </div>
        )
        
    }
}

export default AdminView