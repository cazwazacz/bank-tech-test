function History() {
  this._history = [];
}

History.prototype.show = function () {
  return this._history;
};

History.prototype.recordTransaction = function (date, type, amount, balance) {
  this._history.push({date: date, transactionType: type, amount: amount, balance: balance});
};
