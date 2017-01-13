import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <div className="title">
            <span>Obnoxious Clock v2</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;