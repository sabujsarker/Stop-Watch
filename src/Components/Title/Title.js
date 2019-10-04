import React, { Component } from 'react'
import './Title.css';
class Title extends Component{
    constructor(props){
        super(props)
        this.state ={
            title : 'demo text',
            IsInput : false
        }
    }
    ClickHendelar(){
        this.setState({
            ...this.state,
            IsInput : true
        })
    }
    changeHendelar(event){
        this.setState({
            ...this.state,
            title:event.target.value

        })  
    }
    keyhender(event){
            if (event.key === 'Enter') {
                this.setState({
                    ...this.state,
                    IsInput:false
                })
            } 
    }
    blurhendelar(event){
        this.setState({
            ...this.state,
            IsInput:false
        })
    }
    render(){
        let OutPut = null;
        if (this.state.IsInput) {
            OutPut=(
                <div className="Title  w-50">
                    <input type="text" className="form-control" onBlur={(event)=>this.blurhendelar(event)} onKeyPress={(event)=>this.keyhender(event)} onChange={(event)=>this.changeHendelar(event) } value={this.state.title}/>
                </div>
            )
        }else{
            OutPut=(
            <div className="d-flex Title w-50">
            <h1 className="display-4 text-center" onClick={()=>this.ClickHendelar()}>{this.state.title}</h1>
               <span onClick={()=>this.ClickHendelar()} className="ml-auto span">
               <i className="fas fa-pencil-alt"></i>
               </span>
            </div>
            )
        }
        return(
            <div className=" mx-auto">
            {OutPut}
            </div>
        )
    }
}
export default Title;