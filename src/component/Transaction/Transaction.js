import React, { Component } from "react";
import './Transaction.css'

export default class Transaction extends Component {
 
  deleteTransaction = () => {
    this.props.deleteTransaction(this.props.transcation._id);
  };

  render() {
    let transcation = this.props.transcation;
    
    return (
      <div className="transaction-card">
        <div className="vendor"> Vendor: {transcation.vendor}</div>
        <div className="category"> category: {transcation.category}</div>
        <div className="amount"> Amount: {transcation.amount}</div>
        <button className="delete" onClick={this.deleteTransaction}>Delete</button>
      </div>
    );
  }
}
