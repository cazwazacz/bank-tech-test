function History() {
  this._history = [];
}

History.prototype.show = function () {
  return this._history;
};

History.prototype.recordTransaction = function (date, type, amount, balance) {
  this._isDateValid(date);
  this._history.push({date: date, transactionType: type, amount: amount, balance: balance});
};

History.prototype._isDateValid = function (date) {
  if (this._history.length > 0 && Date.parse(date) < Date.parse(this._history[this._history.length - 1].date)) {
    throw new Error("Date must be on or after " + this._history[this._history.length - 1].date);
  }
};
