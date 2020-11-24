import React,{Component} from 'react';
import './Table.css';
import './Toast.holder.css';
import cookies from 'js-cookie'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export class AdminViewTapahtumapoisto extends Component {
   
  
    state = {
        tapahtumat: []
      }



  componentDidMount() {
   
    fetch('http://localhost:8000/tapahtumat/future',{
        method: 'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           
        }
})
    .then(res => res.json())
    .then((data) => {
      this.setState({ tapahtumat: data.list })
    })
    .catch(console.log)
  }




    render() {
     
      


        function poista(id) {
          
            
                fetch('http://localhost:8000/tapahtumat/',{
                    method: 'DELETE',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'authorization': "Bearer "+cookies.get('token')+""
                    },
                    body: JSON.stringify({id: id})
            })
                .then(res => res.json())
                .then((data) => {
                  this.setState({ tapahtumat: data.list })
                })
                .catch(console.log)
                window.location.reload(true)
              }

           

        
           
           
        
          
     
        return (
          <div class="wrapwrap">
           
          <h1>Poista tapahtuma</h1>

          
          <table className="table" id="table1">
<tbody>
          <tr>
            <th>ID</th>
            <th>Mikä</th>
            <th>Missä</th>
            <th>AloitusPvm</th>
            <th>Poista tapahtuma</th>

          </tr>
            
          {this.state.tapahtumat.map((tapahtuma) => (
             
                  <tr>
                  <td>{tapahtuma.tapahtuma_id}</td>
                  <td>{tapahtuma.mika}</td>
                  <td>{tapahtuma.missa}</td>
                  <td>{tapahtuma.start_time}</td>
                  <td><button onClick ={()=>poista(tapahtuma.tapahtuma_id)}>Poista</button></td>
                </tr>
      
              ))}
</tbody>
            </table>
            
            
               </div>
        )
        
    }
}

export default AdminViewTapahtumapoisto