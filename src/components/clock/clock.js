import React, { Component } from 'react';
import './clock.css';
import {colorUtils} from '../../util/ColorUtils';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), style: { color: "blue" } };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.colorInterval = setInterval(() =>
      this.color(colorUtils.assignRandomColor()), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  color(color) {
    this.setState({ style: { color: color } });
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="clock" style={this.state.style}>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  } vbfgvrqw3ww
}

export default Clock;
