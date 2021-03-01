class Atm {
  constructor() {
    this.carriedDenominations = [20, 10, 5]
    this.funds = 1000
  }

  withdraw(amount, account, pin) {
    if (account.pin === pin ) {
      this.funds -= amount
      let billsToDispatch = []
      this.carriedDenominations.forEach(denomination => {
        while (amount - denomination >= 0) {
          amount -= denomination
          billsToDispatch.push(denomination)
        }
      });
      return { status: 'success', bills: billsToDispatch }
    } else {
      return { status: 'error', message: "You entered the wrong pin code, Please try again!" }
    }
  }

}

module.exports = Atm