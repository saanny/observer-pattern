export default class Payment {
  constructor(paymentSubject) {
    this.paymentSubject = paymentSubject;
  }

  creditCard(paymentData) {
    console.log(`payment acurred from ${paymentData.userName}`);
    this.paymentSubject.notify(paymentData);
  }
}
