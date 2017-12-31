function Printer() {};

Printer.prototype.print = function (history) {
  var history = history.reverse();
  var array = ["date || credit || debit || balance"];
  history.forEach(function(transaction) {
    if (transaction.transactionType === 'deposit') {
      array.push(`${transaction.date} || ${(transaction.amount).toFixed(2)} || || ${(transaction.balance).toFixed(2)}`);
    } else {
      array.push(`${transaction.date} || || ${(transaction.amount).toFixed(2)} || ${(transaction.balance).toFixed(2)}`);
    }
  })
  return array.join("\n");
};
