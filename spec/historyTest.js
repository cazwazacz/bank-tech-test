describe("History", function() {
  var history;

  beforeEach(function() {
    history = new History();
  })

  it("has an empty array on construction", function() {
    expect(history.show()).toEqual([]);
  })
})
