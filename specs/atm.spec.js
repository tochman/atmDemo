const { expect } = require("chai");

const Atm = require('../src/atm')

describe('', () => {

  let subject
  before(()=> {
    subject = new Atm()
  })

  it('can be instantiated', () => {
    expect(subject).to.be.an('object')
  });

  it.only('has 1000 of initial funds', () => {
    expect(subject.funds).to.equal(1000)
  });
});