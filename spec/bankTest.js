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

    it("throws error when trying to deposit money on a date before the last transaction", function() {
      bank.deposit(1000, '10-01-2012');
      expect( function(){ bank.deposit(1000, '09-01-2012'); } ).toThrow(new Error("Date must be on or after 10-01-2012"));
    })
  })

  describe("Withdrawing money", function() {
    it("decrements the current balance by withdrawal amount", function() {
      bank.deposit(1000, '10-01-2012');
      bank.withdraw(700, '11-01-2012');
      expect(bank.currentBalance()).toEqual(300);
    })

    it("throws error when trying to withdraw more money than in account", function() {
      bank.deposit(1000, '10-01-2012');
      expect( function(){ bank.withdraw(1100, '11-01-2012'); } ).toThrow(new Error("Insufficient funds! Current balance is: 1000"));
    })

    it("throws error when trying to withdraw money on a date before the last transaction", function() {
      bank.deposit(1000, '10-01-2012');
      expect( function(){ bank.withdraw(900, '08-01-2012'); } ).toThrow(new Error("Date must be on or after 10-01-2012"));
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
      expect(bank._history).toEqual(array);
    })
  })

})
