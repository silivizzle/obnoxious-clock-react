import React, { Component } from 'react';
import './App.css';
import ColorUtils from './util/ColorUtils';
import Clock from './components/clock/Clock';
import Header from './components/header/Header';

class App extends Component {

  constructor() {
    super();
    this.state = { style: { backgroundColor:  "white" } };
  }

  componentDidMount() {
    this.colorInterval = setInterval(() =>
      this.color(ColorUtils.assignRandomColor()), 300);
  }

  componentWillUnmount() {
    clearInterval(this.colorInterval);
  }

  color(color) {
    this.setState({ style: { backgroundColor: color } });
  }

  render() {
    return (
      <div className="App" style={this.state.style} >
        <Header />
        <Clock />
      </div>
    );
  }
}

export default App;
