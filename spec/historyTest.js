describe("History", function() {
  var history;

  beforeEach(function() {
    history = new History();
  })

  it("has an empty array on construction", function() {
    expect(history.show()).toEqual([]);
  })

  it("records history of transactions", function() {
    history.recordTransaction('10-01-2012', 'deposit', 1000, 1000);
    history.recordTransaction('11-01-2012', 'deposit', 2000, 3000);
    history.recordTransaction('12-01-2012', 'withdrawal', 500, 2500);
    var array = [
      {date: '10-01-2012', transactionType: 'deposit', amount: 1000, balance: 1000},
      {date: '11-01-2012', transactionType: 'deposit', amount: 2000, balance: 3000},
      {date: '12-01-2012', transactionType: 'withdrawal', amount: 500, balance: 2500}
    ]
    expect(history.show()).toEqual(array);
  })
})
