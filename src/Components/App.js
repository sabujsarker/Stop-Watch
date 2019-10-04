import React from 'react';
import './App.css';
import Title from './Title/Title';
import CountDown from './CountDown/CountDown'
import Controller from './Controller/Controller'
import Laps from './Laps/Laps'

class App extends React.Component{
  state ={
    time:{
      min:0,
      sec:0,
      mins:0
    },
    laps : []
  }
  getStart(){
    this.intervalID = setInterval(() => {
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mins = this.state.time.mins
      if(mins>10){
        sec =sec + 1
        mins = 0 
      }
      if (sec>60) {
        min = min + 1
        sec = 0
      }
      this.setState({
        ...this.state,
        time : {
          min,
          sec,
          mins: mins + 1
        }
      })
    },100)
  }
  getPause(){
    clearInterval(this.intervalID)
  }
  getReset(){
    this.setState({
      time:{
        min:0,
        sec:0,
        mins:0
      },
      laps:[]
    })
  }
  getLap = () => {
    let time = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps:[time , ...this.state.laps]
    })

  }
  render() {
    return (
      <div className="App">
        <div className="container">
         <div className="row">
           <div className="col-md-12 py-5 ">
           <Title/>
           <CountDown time={this.state.time}/>
           <Controller 
           start={this.getStart.bind(this)}
           pause={this.getPause.bind(this)}
           lap={this.getLap.bind(this)}
           reset={this.getReset.bind(this)}
           />
           <Laps laps={this.state.laps}/>
           </div>
         </div>
        </div>
      </div>
    );
  }
}

export default App;
