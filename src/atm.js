class Atm {
  constructor() {
    this.carriedDenominations = [20, 10, 5]
    this.funds = 1000
  }

  withdraw(amount) {
    this.funds -= amount
    let billsToDispatch = []
    this.carriedDenominations.forEach(denomination => {
      while (amount - denomination >= 0) {
        amount -= denomination
        billsToDispatch.push(denomination)
      }
    });
    return { status: 'success', bills: billsToDispatch }
  }

}

module.exports = Atm