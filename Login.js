import React, { Component } from 'react'
import './login.css'
export  class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            text:"",
            amount:"",
            expenses:[]
        }
    }
onHandleClick=()=>{
const{text,amount}=this.state
let arr=[...this.state.expenses,{tittle:text,amount:amount}]
this.setState({expenses:arr})

this.setState({text:"",amount:""})


}

onTextChange=(event)=>{
this.setState({text:event.target.value})
}
onPwdChange=(event)=>{
    this.setState({amount:event.target.value})
}


    render() {
        console.log(this.state.expenses)
        return (
            // <div className="lg">
            <div align={"center"} className="h1">
                <input className="input1" value={this.state.text}     type="text"     placeholder="username"   onChange={this.onTextChange}  ></input><br></br>
                <input className="input2" value={this.state.amount}  type="text"      placeholder="password"   onChange={this.onPwdChange}></input><br></br>
                {/* <input type="checkbox"></input> */}
                <button className="btn" onClick={this.onHandleClick} >login</button>
            </div>
            // </div>
        )
    }
}
export default Login