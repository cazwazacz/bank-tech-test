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
    it("increments the current balance", function() {
      bank.deposit(1000, '10-01-2012');
      expect(bank.currentBalance()).toEqual(1000);
    })
  })

})
