describe("Infrastructure", function() {

  var bank;

  beforeEach(function() {
    bank = new Bank;
  })

  describe("Bank", function() {
    it("exists", function() {
      expect(bank).toEqual(jasmine.any(Bank));
    })
  })

})
