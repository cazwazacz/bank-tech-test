describe("Infrastructure", function() {

  var bank;

  beforeEach(function() {
    bank = new Bank;
  })

  describe("Creating a new bank", function() {
    it("is an instance of Bank", function() {
      expect(bank).toEqual(jasmine.any(Bank));
    })

    it("has an initial balance of zero", function() {
      expect(bank.currentBalance()).toEqual(0);
    })

    it("has a history which is an empty array", function() {
      expect(bank._history).toEqual([]);
    })
  })

  describe("Depositing money", function() {
    it("increments the current balance by deposit amount", function() {
      bank.deposit(1000, '10-01-2012');
      expect(bank.currentBalance()).toEqual(1000);
    })
  })

  describe("Withdrawing money", function() {
    it("descrements the current balance by withdrawal amount", function() {
      bank.deposit(1000, '10-01-2012');
      bank.withdraw(700, '11-01-2012');
      expect(bank.currentBalance()).toEqual(300);
    })
  })

  describe("Recording transaction history", function() {
    it("_history returns an array of all past transactions", function() {
      bank.deposit(1000, '10-01-2012');
      bank.withdraw(700, '11-01-2012');
      bank.withdraw(100, '12-01-2012');
      bank.deposit(2000, '13-01-2012');
      var array = [
        {date: '10-01-2012', transactionType: 'deposit', amount: 1000, balance: 1000},
        {date: '11-01-2012', transactionType: 'withdrawal', amount: 700, balance: 300},
        {date: '12-01-2012', transactionType: 'withdrawal', amount: 100, balance: 200},
        {date: '13-01-2012', transactionType: 'deposit', amount: 2000, balance: 2200},
      ]
      console.log(bank._history);
      expect(bank._history).toEqual(array);
    })
  })

})
