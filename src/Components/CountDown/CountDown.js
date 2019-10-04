import React from 'react';
import Digit from './Digit/Digit'
import './Digit/Digit.css'
const CountDown = (props)=>{
    return(
        <div className="d-flex mt-5 ">
        <Digit value={props.time.min} color='#2E86C1'/>
        <Digit value={props.time.sec} color='#D4AC0D'/>
        <Digit value={props.time.mins} color='#922B21'/>
        </div>
    )
}
export default CountDown