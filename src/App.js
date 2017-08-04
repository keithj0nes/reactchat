import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import ChatLog from "./components/ChatLog";

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      messages: [{user: "Bam Margera", message: "Ape didn't like her present I got her"},
                 {user: "Dwayne Johnson", message: "Do you smell what I'm cookin'?!"}],
      value: ''
    }


    setTimeout(()=>{
      this.setState({     //setState.messages to state.value (value entered)
        messages: this.state.messages.concat({user: "Chris Brooks", message: "this is the worst chat ever"})
      })
    },5000)

    setTimeout(()=>{
      this.setState({     //setState.messages to state.value (value entered)
        messages: this.state.messages.concat({user: "Adam Common", message: "Sorry guys, still crossfitting right now"})
      })
    },10000)
  }

  handleSubmit(e){
    // console.log(this.state);
    e.preventDefault();     //dont reload page on submit - reloads by default
    this.setState({     //setState.messages to state.value (value entered)
      messages: this.state.messages.concat({user: "me", message: this.state.value})
    })
    this.refs.chatInput.value = "";     //clear input box
  }

  handleChange(e){     //set state on each letter pressed
    this.setState({value: e.target.value});
  }

  scrollToBottom = () => {
    // const node = ReactDOM.findDOMNode(this.messagesEnd);
    const node = this.refs.messagesEnd;
    node.scrollIntoView();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate(){
    this.scrollToBottom();
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
            <div className="chat-room-no-scrollbar">
              <ul>
              {this.state.messages.map((message, index)=>{
                if(message.user === "me"){
                  return (<li key={index} className="flr">{message.message}</li>)
                }
                return (<li key={index} className="clear"><span className="user-name">{message.user}</span>: {message.message}</li>)
              })}
              </ul>
              <div style={{ float:"left", clear: "both" }}
               ref="messagesEnd" />
             </div>
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

// <div style={{ float:"left", clear: "both" }}
 // ref={(el) => { this.messagesEnd = el; }} />
