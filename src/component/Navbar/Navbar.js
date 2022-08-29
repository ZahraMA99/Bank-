import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <h1 className="logo">Bank</h1>
          <div className="navLinks">
            <Link to={"/operation"}>New Operation</Link>
            <Link to={"/breakdown"}>Breakdown</Link>
          </div>
          <div className="balance">
            <div>Balance</div>
            <div className="balance">${this.props.totalAmount}</div>
          </div>
        </div>

      </div>
    );
  }
}
