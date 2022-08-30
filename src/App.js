import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import Transactions from "./component/Transactions/Transactions";
import axios from "axios";
import Balance from "./component/Balance/Balance";
import Operations from "./component/Operations/Operations";
import Breakdown from "./component/Breakdown/Breakdown";
import Navbar from "./component/Navbar/Navbar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      totalAmount: 0,
    };
  }

  calculateTotalAmount = () => {
    let totalAmount = 0;
    let amounts = this.state.transactions.map((t) => t.amount);
    for (let amount of amounts) {
      totalAmount += amount;
    }
    return totalAmount;
  };

  changTheme = () => {
      
  }
  //deposit & withdraw
  addTransaction = async (transaction) => {
    await axios.post("http://localhost:3003/transaction", transaction);
    this.getTransactions();
  };

  deleteTransaction = async (transactionID) => {
    await axios.delete(`http://localhost:3003/transaction/${transactionID}`);
    this.getTransactions();
  };

  getTransactions = async () => {
    let transactions = await axios.get("http://localhost:3003/transactions");
    this.setState({ transactions: transactions.data });
  };

  componentDidMount = () => {
    this.getTransactions();
  };

  render() {
    return (
      <Router>
        <div className="bank">
          <Navbar />
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Balance calculateTotalAmount={this.calculateTotalAmount} />
                <Transactions
                  transactions={this.state.transactions}
                  deleteTransaction={this.deleteTransaction}
                  changTheme = {this.changTheme}
                />
              </div>
            )}
          />
          <Route
            exact
            path="/operations"
            render={() => <Operations addTransaction={this.addTransaction} />}
          />

          <Route
            exact
            path="/categories"
            render={() => <Breakdown transactions={this.state.transactions} />}
          />
        </div>
      </Router>
    );
  }
}
