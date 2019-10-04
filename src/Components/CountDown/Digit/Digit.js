import React from 'react';
const Digit = (props)=>{
    return(
        <div className="digit  rounded-circle text-center" style={{color:props.color}}>
            <h1 style={{color:props.color}} className="display-2">{props.value<10 ? `0${props.value}` : props.value}</h1>
        </div>
    )
}
export default Digit