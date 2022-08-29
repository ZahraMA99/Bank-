import React, { Component } from "react";

export default class Operations extends Component {
  constructor() {
    super();
    this.state = {
      currentButton: "deposit",
    };
  }

  selectButton = (event) => {
    this.setState({
      currentButton: event.target.name,
    });
  };

  addTransaction = (event) => {
      const transaction ={
          amount  : this.state.currentButton === "deposit" ? event.target.amount.value : event.target.amount.value * -1,
          category : event.target.category.value,
          vendor : event.target.vendor.value,
      }
      this.props.addTransaction(transaction)
  }

//   deposit = (event) => {
//     const transaction = {
//       amount: event.target.amount.value,
//       category: event.target.category.value,
//       vendor: event.target.vendor.value,
//     };
//     this.props.deposit(transaction);
//   };

//   withdraw = (event) => {
//     const transaction = {
//       amount: event.target.amount.value * -1,
//       category: event.target.category.value,
//       vendor: event.target.vendor.value,
//     };
//     this.props.deposit(transaction);
//   };

  render() {
    return (
      <form onSubmit={this.addTransaction}>
        <label>Amount</label>
        <input type="Number" name="amount" />
        <label>Vendor</label>
        <input type="Text" name="vendor" />
        <label>Category</label>
        <input type="Text" name="category" />
        <button onClick={this.selectButton} name="deposit">
          Deposit
        </button>
        <button onClick={this.selectButton} name="withdraw">
          Withdraw
        </button>
      </form>
    );
  }
}


