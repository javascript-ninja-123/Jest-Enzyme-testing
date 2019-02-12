import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jotta from './Jotta';
import Modal from './Modal';
import GuessWord from './GuessWord';
import Todo from './Todo'

class App extends Component {
  state = {
    count:0
  }
  onClick = () => {
    this.setState({count: this.state.count+1})
  }
  onClickDec = () => this.setState({count:this.state.count - 1})
  render() {
    return (
      <div className="App">
        <p data-test="title">The counter is {this.state.count}</p>
        <button data-test="button" onClick={this.onClick}>Increase counter</button>
        <button data-test="decbutton" onClick={this.onClickDec}>Dec</button>
        <Jotta success/>
        <Modal/>
        <GuessWord/>
        <Todo/>
      </div>
    );
  }
}

export default App;
