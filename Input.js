import React, { Component } from 'react'

export  class Input extends Component {
    constructor(props){
super(props);
this.state={
    text:"",
    amount:"",
    expenses:[]

}}
onHandleClick=()=>
{
    const{text,amount}=this.state
    let arr=[...this.state.expenses,{title:text,amount:amount}]
    this.setState({expenses:arr})
    this.setState({text:"",amount:""})
}
A=(event)=>
{
    this.setState({text:event.target.values})
}

B=(event)=>
{
    this.setState({amount:event.target.values})
}
    
    render() {
        console.log(this.state.expenses)
        return (
            <div>
                <button onClick={this.onHandleClick()}>login</button>
                <input  value={this.state.text}type="text" placeholder="user" onChange={this.A}></input>
                <input value={this.state.amount} type="text" placeholder="pswd" onChange={this.B}></input>
                
            </div>
        )
    }
}
export default Input