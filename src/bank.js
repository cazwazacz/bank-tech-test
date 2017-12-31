function Bank() {
  this._currentBalance = 0;
  this._history = [];
}

Bank.prototype.currentBalance = function () {
  return this._currentBalance;
};

Bank.prototype.deposit = function (amount, date) {
  this._currentBalance += amount;
  this._recordTransaction(date, 'deposit', amount);
};

Bank.prototype.withdraw = function (amount, date) {
  this._areFundsSufficient(amount);
  this._currentBalance -= amount;
  this._recordTransaction(date, 'withdrawal', amount);
};

Bank.prototype._recordTransaction = function (date, type, amount) {
  this._history.push({date: date, transactionType: type, amount: amount, balance: this._currentBalance});
};

Bank.prototype._areFundsSufficient = function (amount) {
  if (amount > this._currentBalance) {
    throw new Error('Insufficient funds! Current balance is: ' + this._currentBalance);
  };
};
