import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import Transactions from "./component/Transactions/Transactions";
import axios from "axios";
import Balance from "./component/Balance/Balance";
import { Fragment } from "react";
import Operations from "./component/Operations/Operations";


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

  addTransaction = async (transaction) => {
    await axios.post("http://localhost:3003/transaction", transaction);
    this.getTransactions();
  };

  getTransactions = async () => {
    let transactions = await axios.get("http://localhost:3003/transactions");
    this.setState({ transactions: transactions.data });
  };

  deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:3003/transaction/${id}`);
    this.getTransactions();
  };

  componentDidMount = () => {
    this.getTransactions();
  };

  render() {
    return (
      <Router>
        <div className="bank">
          <div className="nav">
            <Link to="/">Transactions</Link>
            <Link to="/operations">Operations</Link>
            {/* <Link to="/categories">Categories</Link> */}
          </div>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Balance calculateTotalAmount={this.calculateTotalAmount} />
                <Transactions
                  transactions={this.state.transactions}
                  deleteTransaction={this.deleteTransaction}
                />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/operations"
            render={() => <Operations addTransaction={this.addTransaction} />}
          />
          {/* <Route
            exact
            path="/categories"
            render={() => <Breakdown transactions={this.state.transactions} />}
          /> */}
        </div>
      </Router>
    );
  }
}

{
  /* <Transactions
          transactions={this.state.transactions} deleteTransaction={this.deleteTransaction}
        />
        <Balance calculateAmount={this.calculateTotalAmount} />

 */
}

// deleteTransaction = async (id) => {
//   await axios.delete("http://localhost:3003/transaction/" + id);
//   this.renderTransactions();
// };

// deposit = (transaction) => {
//   this.addTransaction(transaction);
// };

// withdraw = (transaction) => {
//   this.addTransaction(transaction);
// };

// addTransaction = (transaction) => {
//   axios
//     .post("http://localhost:4000/transaction", transaction)
//     .then((response) => {
//       let transactionData = response.data;
//       this.setState({
//         ...this.state,
//         transactions: [...this.state.transactions, transactionData],
//       });
//     });
// };
