import React, { Component } from "react";
import './Balance.css'
export default class Balance extends Component {
  render() {
    let balance = this.props.calculateTotalAmount();
    let color = balance < 500 ? "red" : "green"
    return (
      <div className="balance">
        Balance: 
         <span className={color} > {balance}$</span>
      </div>
    );
  }
}
