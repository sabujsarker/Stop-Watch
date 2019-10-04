import React, { Component } from 'react';
class Controller extends Component {
    state={
        start : true,
        pause : false,
        lap : false,
        reset : false
    }
    clickHendelar=(e)=>{
        this.setState({
            start : false,
            pause : true,
            lap : true,
            reset : false
        })
        this.props.start()
    }
    
    clickPause=(e)=>{
        this.setState({
            start : true,
            pause : false,
            lap : true,
            reset : true
        })
        this.props.pause()
    }
    resetHendelar=(e)=>{
        this.setState({
            start : true,
            pause : false,
            lap : false,
            reset : false
        })
        this.props.reset()
    }
    lapHendelar=(e)=>{
        this.props.lap()
    }

    getController(){
        let output= null
        if (this.state.start && !this.state.reset) {
            output = (
                <div className="mt-5 ">
                    <button onClick={this.clickHendelar} className="btn btn-success text-uppercase btn-lg ml-5 px-5">start</button>
                </div>
            )
        }
        else if (!this.state.start && !this.state.reset) {
            output = (
                <div className="mt-5 ">
                    <button onClick={this.clickPause} className="btn btn-warning text-uppercase btn-lg ml-5 px-5">pause</button>
                    <button onClick={this.lapHendelar} className="btn btn-info  text-uppercase btn-lg ml-5 px-5">lap</button>
                </div>
            )
        }
        else if (!this.state.pause && this.state.lap) {
            output = (
                <div className="mt-5  ">
                    <button onClick={this.clickHendelar}className="btn btn-success text-uppercase  btn-lg ml-5 px-5">Start</button>
                    <button onClick={this.resetHendelar}className="btn btn-danger text-uppercase btn-lg ml-5 px-5">Reset</button>
                </div>
            )
        }
            return output
        }
    
    render() {
        return this.getController()
    }
}
export default Controller 