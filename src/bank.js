function Bank(printer, history) {
  this._currentBalance = 0;
  this._printer = new printer;
  this._history = new history;
}

Bank.prototype.currentBalance = function () {
  return this._currentBalance;
};

Bank.prototype.deposit = function (amount) {
  this._history.recordTransaction(this._date(), 'deposit', amount, this._currentBalance);
  this._currentBalance += amount;
};

Bank.prototype.withdraw = function (amount) {
  this._areFundsSufficient(amount);
  this._history.recordTransaction(this._date(), 'withdrawal', amount, this._currentBalance);
  this._currentBalance -= amount;
};

Bank.prototype.printStatement = function () {
  return this._printer.print(this._history.show());
};

Bank.prototype._areFundsSufficient = function (amount) {
  if (amount > this._currentBalance) {
    throw new Error('Insufficient funds! Current balance is: ' + this._currentBalance);
  };
};

Bank.prototype._date = function () {
  var date = new Date();
  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
};
