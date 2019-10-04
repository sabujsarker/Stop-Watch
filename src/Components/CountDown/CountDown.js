import React from 'react';
import Digit from './Digit/Digit'
import './Digit/Digit.css'
const CountDown = (props)=>{
    return(
        <div className="d-flex justify-content-around ">
        <Digit value={props.time.min} color='black'/>
        <Digit value={props.time.sec} color='red'/>
        <Digit value={props.time.mins} color='green'/>
        </div>
    )
}
export default CountDown