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
    
    fetch('http://localhost:8000/jasenrekisteri/false',{
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
     
      


        function maksuPaivitys(maksu,id) {
           if(maksu==1){
            
                fetch('http://localhost:8000/jasenrekisteri/',{
                    method: 'PUT',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'authorization': "Bearer "+cookies.get('token')+""
                    },
                    body: JSON.stringify({maksu: 0, jasen_id: id})
                 
            })
                .then(res => res.json())
                .then((data) => {
                  this.setState({ userlist: data.list })
                })
                .catch(console.log)
               
              }

           

           else if(maksu==0){
            
                fetch('http://localhost:8000/jasenrekisteri/',{
                    method: 'PUT',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'authorization': "Bearer "+cookies.get('token')+""
                    },
                    body: JSON.stringify({maksu: 1, jasen_id: id})
            })
                .then(res => res.json())
                .then((data) => {
                  this.setState({ userlist: data.list })
                })
                .catch(console.log)
              }
              
              window.location.reload(true)
           }
           
        
          
     
        return (
            
            <div class="wrapwrap">
           
          <h1>Jäsenmaksujen tarkistus</h1>
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
            <th>Varmista maksu</th>

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
                  <td><button onClick ={()=>maksuPaivitys(user.maksu,user.jasen_id)}>Varmista</button></td>
                </tr>
      
              ))}
</tbody>
            </table>
            
            
               </div>
        )
        
    }
}

export default AdminView