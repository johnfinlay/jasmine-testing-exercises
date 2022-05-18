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
  it('should return a tip percentage', function() {
    expect(calculateTipPercent(25, 3)).toEqual(12);
    expect(calculateTipPercent(100, 50)).toEqual(50);
  });
// appendTd(tr, value)
  it('should append a <td> element with text to a given <tr> element', function() {
    const testTr = document.createElement('tr');
    appendTd(testTr, 'howdy')
    expect(testTr.innerHTML).toEqual('<td>howdy</td>');
    expect(testTr.children.length).toEqual(1);
    expect(testTr.children[0].innerHTML).toEqual('howdy');
  });
// appendDeleteBtn(tr)
  it('should append a td to the given tr, with click event that will delete the tr', function() {
    const testTbody = document.createElement('tbody');
    const testTr = document.createElement('tr');
    appendDeleteBtn(testTr);
    testTbody.appendChild(testTr);
    expect(testTr.innerHTML).toEqual('<td>X</td>');
  });
afterAll(function() {
  allPayments = {};
});
});