import React, { Component } from 'react';
import './App.css';
import { colorUtils } from './util/ColorUtils';
import Clock from './components/clock/Clock';

class App extends Component {

  constructor() {
    super();
    this.state = { style: { 'background-color':  "white" } };
  }

  componentDidMount() {
    this.colorInterval = setInterval(() =>
      this.color(colorUtils.assignRandomColor()), 1000);
  }

  color(color) {
    this.setState({ style: { 'background-color': color } });
  }

  render() {
    return (
      <div className="App" style={this.state.style}>
        <Clock />
      </div>
    );
  }
}

export default App;
