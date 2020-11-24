import React,{Component} from 'react';
import toaster from 'toasted-notes';
import './Toasts.css';


export class Toasts extends Component {

    state = {
        tapahtumat: []
          }


    componentDidMount() {
        fetch('http://localhost:8000/tapahtumat/future')
        .then(res => res.json())
        .then((data) => {
          this.setState({ tapahtumat: data.list })
        })
        .catch(console.log)
      }



    render() {
 
        return (

          <div> 
            {this.state.tapahtumat.map((tapahtuma) => (
                 
            
                <div className ='class1'>

                    <p>Mikä:     {tapahtuma.mika}           Missä:{tapahtuma.missa}</p>
        
                    <hr></hr>
                    <p>Milloin: {tapahtuma.start_time}</p>
                    <p>-{tapahtuma.end_time}</p>
       
                    <p>{tapahtuma.hinta}</p>
       
                    <p>{tapahtuma.linkki}</p>
                    <p>{tapahtuma.kuva}</p>

                    <p>Info:{tapahtuma.teksti}</p>
                    <hr></hr>
        
                 
                </div>
                  
                 
                  // This notification will not automatically close
                

              ))}

       
          
          
        
          
          
         
                 
          
          
          
         </div>
          
       

          
          



            
        )
        
    }
}

export default Toasts