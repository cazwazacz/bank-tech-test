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

})
