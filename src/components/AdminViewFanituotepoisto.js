import React,{Component} from 'react';
import './Table.css';
import './Toast.holder.css';
import cookies from 'js-cookie'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export class AdminViewFanituotepoisto extends Component {
   
  
    state = {
        tapahtumat: []
      }



  componentDidMount() {
   
    fetch('http://localhost:8000/fanituotteet/',{
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
          
            
                fetch('http://localhost:8000/fanituotteet/',{
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
           
          <h1>Poista fanituote</h1>

          
          <table className="table" id="table1">
<tbody>
          <tr>
            <th>ID</th>
            <th>Nimi</th>
            <th>Hinta</th>
            <th>Info</th>
          

          </tr>
            
          {this.state.tapahtumat.map((tapahtuma) => (
             
                  <tr>
                  <td>{tapahtuma.fanituote_id}</td>
                  <td>{tapahtuma.nimi}</td>
                  <td>{tapahtuma.hinta}</td>
                  <td>{tapahtuma.info}</td>
                  
                  <td><button onClick ={()=>poista(tapahtuma.fanituote_id)}>Poista</button></td>
                </tr>
      
              ))}
</tbody>
            </table>
            
            
               </div>
        )
        
    }
}

export default AdminViewFanituotepoisto