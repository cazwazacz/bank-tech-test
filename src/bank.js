function Bank() {
  this._currentBalance = 0;
}

Bank.prototype.currentBalance = function () {
  return this._currentBalance;
};

Bank.prototype.deposit = function (amount, date) {
  this._currentBalance += amount;
};

Bank.prototype.withdraw = function (amount, date) {
  this._currentBalance -= amount;
};
