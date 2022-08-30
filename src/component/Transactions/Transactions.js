import React, { Component } from "react";
import Transaction from "../Transaction/Transaction";
import "./Transactions.css";

export default class Transactions extends Component {
  render() {
    let transactions = this.props.transactions;
    let deleteTransaction = this.props.deleteTransaction;
    // let changTheme = this.props.changTheme;
    return (
      <div>
        <div className="transaction-container">
          {transactions.map((transaction) => (
            <Transaction
              transcation={transaction}
              key={transaction._id}
              deleteTransaction={deleteTransaction}
            />
          ))}
        </div>
        {/* <button onClick= {} ? style ={{background-color: 'black' : background-color: 'pink'}}> DARK THEME</button> */}
      </div>
    );
  }
}
