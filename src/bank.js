function Bank() {
  this._currentBalance = 0;
}

Bank.prototype.currentBalance = function () {
  return this._currentBalance;
};
