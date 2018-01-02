function Bank(printer, history) {
  this._currentBalance = 0;
  this._printer = new printer;
  this._history = new history;
}

Bank.prototype.currentBalance = function () {
  return this._currentBalance;
};

Bank.prototype.deposit = function (amount, date) {
  // this._isDateValid(date);
  this._history.recordTransaction(date, 'deposit', amount, this._currentBalance);
  this._currentBalance += amount;
};

Bank.prototype.withdraw = function (amount, date) {
  this._areFundsSufficient(amount);
  this._history.recordTransaction(date, 'withdrawal', amount, this._currentBalance);
  // this._isDateValid(date);
  this._currentBalance -= amount;
};

Bank.prototype.print = function () {
  return this._printer.print(this._history.show());
};

Bank.prototype._areFundsSufficient = function (amount) {
  if (amount > this._currentBalance) {
    throw new Error('Insufficient funds! Current balance is: ' + this._currentBalance);
  };
};

// Bank.prototype._isDateValid = function (date) {
//   if (this._history.show().length > 0 && Date.parse(date) < Date.parse(this._history.show()[this._history.show().length - 1].date)) {
//     throw new Error("Date must be on or after " + this._history.show()[this._history.show().length - 1].date);
//   }
// };
