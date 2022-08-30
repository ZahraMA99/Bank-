const express = require("express");
const router = express.Router();
const Transaction = require("../model/transactionSchema");

//error handling
const createError = (error, explination) => {
  const errorMessage = {
    error: error,
    detail: {
      surname: explination,
    },
  };
  return JSON.stringify(errorMessage);
};

router.get("/transactions", async (request, response) => {
  try {
    const transactions = await Transaction.find({});
    response.send(transactions);
  } catch (e) {
    const error = createError(
      e.message,
      "We couldn't find the transactions that you are looking for"
    );
    response.status(404).send(error);
  }
});

router.post("/transaction", async (request, response) => {
  try {
    const transaction = request.body;
    const newtransaction = new Transaction({
      amount: transaction.amount,
      category: transaction.category,
      vendor: transaction.vendor,
    });
    await newtransaction.save();
    response.send(newtransaction);
  } catch (e) {
    const error = createError(
      e.message,
      "We couldn't create a new transaction"
    );
    res.status(404).send(error);
  }
});

router.delete("/transaction/:id", async (request, response) => {
  try {
    const transactionId = request.params.id;
    const deletedTransaction = await Transaction.findByIdAndDelete(
      transactionId,
      { new: true }
    );
    response.send(deletedTransaction);
  } catch (e) {
    const error = createError(
      e.message,
      "We couldn't find and delete the transaction"
    );
    res.status(404).send(error);
  }
});

module.exports = router;
