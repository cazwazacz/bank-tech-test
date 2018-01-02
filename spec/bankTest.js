describe("Bank", function() {

  var bank;

  function PrinterDouble() {};
  PrinterDouble.prototype.print = function () {
    return "date || credit || debit || balance";
  };

  function HistoryDouble() {};
  HistoryDouble.prototype.show = function () { return []; };
  HistoryDouble.prototype.recordTransaction = function () {};

  beforeEach(function() {
    bank = new Bank(PrinterDouble, HistoryDouble);
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
    it("decrements the current balance by withdrawal amount", function() {
      bank.deposit(1000, '10-01-2012');
      bank.withdraw(700, '11-01-2012');
      expect(bank.currentBalance()).toEqual(300);
    })

    it("throws error when trying to withdraw more money than in account", function() {
      bank.deposit(1000, '10-01-2012');
      expect( function(){ bank.withdraw(1100, '11-01-2012'); } ).toThrow(new Error("Insufficient funds! Current balance is: 1000"));
    })
  })

  describe("Printing", function() {
    it("tells printer to print", function() {
      var string = "date || credit || debit || balance";
      expect(bank.printStatement()).toEqual(string);
    })
  })

})
