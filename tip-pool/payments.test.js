describe('Payments test', function() {
  beforeEach(function() {
    billAmtInput.value = 20.00;
    tipAmtInput.value = 4.00;
  });
//submitPaymentInfo()
  it('should add a new payment to allPayments on submitPaymentInfo()', function() {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment' + paymentId].billAmt).toEqual('20');
    expect(allPayments['payment' + paymentId].tipAmt).toEqual('4');
    expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);
  });
//createCurPayment()
  it('should return an object with payment information', function() {
    expect(createCurPayment()).toEqual({billAmt: '20', tipAmt: '4', tipPercent: 20});

  });
//appendPaymentTable()
  it('should add a row to the payments table UI', function() {
    submitPaymentInfo();
    expect(document.getElementById('payment' + paymentId).children[0].innerText).toEqual('$20');
    expect(document.getElementById('payment' + paymentId).children[1].innerText).toEqual('$4');
    expect(document.getElementById('payment' + paymentId).children[2].innerText).toEqual('20%');
  });
//updateSummary()
  it('should update UI with Shift Summary data', function() {
    submitPaymentInfo();
    expect(summaryTds[0].innerHTML).toEqual('$20');
    expect(summaryTds[1].innerHTML).toEqual('$4');
    expect(summaryTds[2].innerHTML).toEqual('20%');
  });

  afterEach(function() {
    for (let key in allPayments){
      document.getElementById(key).remove();
    }
    for (let td of summaryTds){
      td.innerHTML = '';
    }
    allPayments = {};
    paymentId = 0;
  });
});