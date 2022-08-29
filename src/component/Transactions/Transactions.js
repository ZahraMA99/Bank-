import React, { Component } from 'react'
import Transaction from '../Transaction/Transaction'

export default class Transactions extends Component {
  render() {
    let transactions = this.props.transactions
    let deleteTransaction = this.props.deleteTransaction;
    
    return (
      <div className='transaction-container'>
        {transactions.map((transaction) => <Transaction transcation={transaction} key={transaction._id} deleteTransaction = {deleteTransaction} />)}

      </div>
    )
  }
}

