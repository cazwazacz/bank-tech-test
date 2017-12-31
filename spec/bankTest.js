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

})
