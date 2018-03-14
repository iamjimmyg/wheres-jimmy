import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header style={{
          ...this.props.style,

          overflow: "auto",
          // background: "#aaa"
        }}>
        <ul className="nav">
          <li className="nav-item"><a className="nav-link active" href="#Home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#About">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#Portfolio">Portfolio</a></li>
          <li className="nav-item"><a className="nav-link" href="#Contact">Contact</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
