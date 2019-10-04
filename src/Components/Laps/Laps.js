import React from 'react';
 const Laps = (props) =>{
     return (
      <div>
      <ul className="list-group list-item-flush my-5">
            { props.laps.map((lap,index) => {
                return (
                    <h4 key={index}>
                    <li  className="list-group-item">
                   <span className="ml-2"> Min : {lap.min} </span>
                   <span className="ml-2"> sec : {lap.sec}  </span>
                   <span className="ml-2"> milisec : {lap.mins} </span>
                    </li>
                    </h4>
                )
            })}
        </ul>
      </div>
     )
 }
 export default Laps