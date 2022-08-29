const express = require("express");
const router = express.Router();
const Transaction = require("../model/transactionSchema");

//error handling

router.get("/transactions", async (request, response) => {
  const transactions = await Transaction.find({});
  response.send(transactions);
});

router.post("/transaction", async (request, response) => {
  const transaction = request.body;
  const newtransaction = new Transaction({
    amount: transaction.amount,
    category: transaction.category,
    vendor: transaction.vendor,
  });
  await newtransaction.save();
  response.send(newtransaction);
});

router.delete("/transaction/:id", async (request, response) => {
  const transactionId = request.params.id;
  const deletedTransaction = await Transaction.findByIdAndDelete(
    transactionId,
    { new: true }
  );
  response.send(deletedTransaction);
});

module.exports = router;
