class Atm {
  constructor() {
    this.funds = 1000
  }

  withdraw(amount) {
    this.funds -= amount
  }

}

module.exports = Atm