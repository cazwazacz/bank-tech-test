describe("Printer", function() {

  var printer;
  var array = [
    {date: '10-01-2012', transactionType: 'deposit', amount: 1000, balance: 1000},
    {date: '11-01-2012', transactionType: 'withdrawal', amount: 700, balance: 300},
    {date: '12-01-2012', transactionType: 'withdrawal', amount: 100, balance: 200},
    {date: '13-01-2012', transactionType: 'deposit', amount: 2000, balance: 2200},
  ];

  beforeEach(function() {
    printer = new Printer();
  })

  it("exists", function() {
    expect(printer).toEqual(jasmine.any(Printer));
  })

  it("prints out the array in table format", function() {
    var string = "date || credit || debit || balance\n" +
                  "13-01-2012 || 2000.00 || || 2200.00\n" +
                  "12-01-2012 || || 100.00 || 200.00\n" +
                  "11-01-2012 || || 700.00 || 300.00\n" +
                  "10-01-2012 || 1000.00 || || 1000.00";
    expect(printer.print(array)).toEqual(string);
  })

})
