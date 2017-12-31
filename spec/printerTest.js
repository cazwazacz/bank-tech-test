describe("Printer", function() {

  var printer;

  beforeEach(function() {
    printer = new Printer();
  })

  it("exists", function() {
    expect(printer).toEqual(jasmine.any(Printer));
  })

})
