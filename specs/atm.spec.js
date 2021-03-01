const { expect } = require("chai");

const Atm = require('../src/atm')

describe('Atm class', () => {

  let subject
  before(()=> {
    subject = new Atm()
  })

  it('can be instantiated', () => {
    expect(subject).to.be.an('object')
  });

  it('has 1000 of initial funds', () => {
    expect(subject.funds).to.equal(1000)
  });

  it('funds are reduced on withdraw', () => {
    subject.withdraw(50)
    expect(subject.funds).to.equal(950)
  });
});