import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// import ChatLog from "./components/ChatLog";

export default class App extends Component {



  constructor(){
    super();
    this.state = {
      // messages: [{user: "Bam Margera", message: "Ape didn't like her present I got her"},
                //  {user: "Dwayne Johnson", message: "Do you smell what I'm cookin'?!"}],
      messages: [],
      value: ''
    }


    // this.getNewMessage();




    // setTimeout(()=>{
    //   // this.setState({})
    // })


    // setTimeout(()=>{
    //   this.setState({     //setState.messages to state.value (value entered)
    //     messages: this.state.messages.concat({user: "Chris Brooks", message: "this is the worst chat ever"})
    //   })
    //   // this.scrollToBottom()
    // },7000)
    //
    // setTimeout(()=>{
    //   this.setState({     //setState.messages to state.value (value entered)
    //     messages: this.state.messages.concat({user: "Adam Common", message: "Sorry guys, still crossfitting right now"})
    //   })
    //   // this.scrollToBottom()
    // },12000)
  }


  getNewMessage(){
    let randomInterval = Math.floor(Math.random()* 11000)

    setTimeout(()=>{
      axios.get('http://localhost:8887/newMessages').then((res)=>{
        let getMessage = res.data.map((obj, index)=>{
          return obj;
        })
        this.setState({
          messages: this.state.messages.concat(getMessage)
        })
      })
      this.getNewMessage();

    }, randomInterval)
  }

  handleSubmit(e){
    e.preventDefault();     //dont reload page on submit - reloads by default
    let timeNow = new Date();
    this.setState({     //setState.messages to state.value (value entered)
      messages: this.state.messages.concat({personName: "me", chatMessage: this.state.value, dateCreated: timeNow}),
      value: ""
    })
    this.refs.chatInput.value = "";     //clear input box
    // this.scrollToBottom()
    // console.log(this.state.messages);
  }

  handleChange(e){     //set state on each letter pressed
    this.setState({value: e.target.value});
  }

  scrollToBottom = () => {
    // console.log("firinggggg");
    // const node = ReactDOM.findDOMNode(this.messagesEnd);
    const node = this.refs.messagesEnd;
    node.scrollIntoView();
  }

  componentDidMount() {
    console.log("running");
    axios.get('http://localhost:8887/messagesArchived').then((res)=>{
      const loadedMessages = res.data.map((obj, index)=>{
        return obj;
      })
      this.setState({
        messages: this.state.messages.concat(loadedMessages)
      })
      this.getNewMessage();
    })
    this.scrollToBottom();

  }

  // componentDidUpdate(){
  //   this.scrollToBottom();
  // }

  render() {
    setTimeout(()=>{
      this.scrollToBottom()
    },10)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Chat</h2>
        </div>
        <div className="App-intro">
          <h1>ChatLog</h1>

          <div className="chat-room">
            <div className="chat-room-no-scrollbar">
              <ul>
              {this.state.messages.map((message, index)=>{
                if(message.personName === "me"){
                  return (<li key={index} className="flr">{message.chatMessage}</li>)
                }
                return (<li key={index} className="clear"><span className="user-name">{message.personName}</span>: {message.chatMessage}</li>)
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
