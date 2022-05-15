
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({
    amount: 20000,
    years: 5,
    rate: 0.04
  })).toEqual('368.33');
  expect(calculateMonthlyPayment({
    amount: 35752,
    years: 8,
    rate: 0.06
  })).toEqual('469.83');
  expect(calculateMonthlyPayment({
    amount: 67259.23,
    years: 6.5,
    rate: 0.055
  })).toEqual('1027.55');
});


it("should return a result with 2 decimal places", function() {
  // Regex Found on Stack Overflow
  // https://stackoverflow.com/questions/660682/regex-that-matches-numeric-with-up-to-2-decimal-places
  expect(calculateMonthlyPayment({
    amount: 20000,
    years: 5,
    rate: 0.04
  })).toMatch(/^\s*-?(\d+(\.\d{1,2})?|\.\d{1,2})\s*$/);
  expect(calculateMonthlyPayment({
    amount: 35752,
    years: 8,
    rate: 0.06
  })).toMatch(/^\s*-?(\d+(\.\d{1,2})?|\.\d{1,2})\s*$/);
  expect(calculateMonthlyPayment({
    amount: 67259.23,
    years: 6.5,
    rate: 0.055
  })).toMatch(/^\s*-?(\d+(\.\d{1,2})?|\.\d{1,2})\s*$/);
});

/// etc
