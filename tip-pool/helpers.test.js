describe('Helpers test', function() {
  beforeAll(function() {
    allPayments = {
      'payment1': {billAmt: '25', tipAmt: '3', tipPercent: 12},
      'payment2': {billAmt: '25', tipAmt: '3', tipPercent: 12},
      'payment3': {billAmt: '25', tipAmt: '3', tipPercent: 12}
    };
  });
// sumPaymentTotal(type)
  it('should return the total amount of bills from allPayments', function() {
   expect(sumPaymentTotal('billAmt')).toEqual(75);
  });
  it('should return the total amount of tips from allPayments', function() {
    expect(sumPaymentTotal('tipAmt')).toEqual(9);
  });
  it('should return the total tip percentage from allPayments', function() {
    expect(sumPaymentTotal('tipPercent')).toEqual(36);
  });
// calculateTipPercent(billAmt, tipAmt)

// appendTd(tr, value)

afterAll(function() {
  allPayments = {};
});
});