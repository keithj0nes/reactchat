import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import ChatLog from "./components/ChatLog";

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      messages: ["here's a message", "here's another"],
      value: ''
    }
  }





//dont reload page on submit - reloads by default
  handleSubmit(e){
    this.setState({
      messages: this.state.messages.concat(this.state.value)
    })
    // console.log(this.state);
    e.preventDefault();
    console.log("working");
    this.refs.chatInput.value = "";
  }

  handleChange(e){
    var myVal = e.target.value;
    this.setState({value: myVal});
    // console.log(e.target.value);
    // console.log(myVal);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h1>ChatLog</h1>

          <div className="chat-room">
            <ul>
            {this.state.messages.map((message, index)=>{
              return (<li key={index}>{message}</li>)
            })}
            </ul>
          </div>

          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" ref="chatInput" placeholder="Your message" onChange={this.handleChange.bind(this)}/>
            <button >Post</button>
          </form>
        </div>
      </div>
    );
  }
}

// <ChatLog />
