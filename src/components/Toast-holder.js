import React,{Component} from 'react';


import Toasts from './Toasts';

export class Toasts_holder extends Component {


    render() {
 
        return (
        <div className = "Toast-container">
         <Toasts> </Toasts>

         </div>
        )}
}

export default Toasts_holder