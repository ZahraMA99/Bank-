import React, { Component } from "react";
import './Balance.css'
export default class Balance extends Component {
  render() {
    let balance = this.props.calculateTotalAmount();
    return (
      <div className="balance">
        Balance: $
        {balance < 500 ? (
          <span className="red">{balance}</span>
        ) : (
          <span className="green">{balance}</span>
        )}
      </div>
    );
  }
}
