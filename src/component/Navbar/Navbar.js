import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <h1 className="logo">Bank</h1>
          <div className="navLinks">
            <Link className="link" to="/">Transactions</Link>
            <Link className="link" to="/operations">Operations</Link>
            <Link className="link" to="/categories">Categories</Link>
          </div>
        </div>
      </div>
    );
  }
}
