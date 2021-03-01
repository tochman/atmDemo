const { expect } = require("chai");
const sinon = require('sinon')

const Atm = require('../src/atm')

describe('Atm class', () => {

  let subject, account
  before(() => {
    subject = new Atm()
    account = { pin: null, balance: null }
    sinon.stub(account, 'pin').value('1234')
  })

  it('can be instantiated', () => {
    expect(subject).to.be.an('object')
  });

  it('has 1000 of initial funds', () => {
    expect(subject.funds).to.equal(1000)
  });

  it('funds are reduced on withdraw', () => {
    subject.withdraw(50, account, '1234')
    expect(subject.funds).to.equal(950)
  });

  it('dispatches funds in bill denominations', () => {
    const expectedBills = [20, 20, 10]
    const response = subject.withdraw(50, account, '1234')
    expect(response.bills).to.eql(expectedBills)
  });

  it('is expected to return a success message', () => {
    let response = subject.withdraw(50, account, '1234')
    expect(response.status).to.equal('success')
  });

  it('is expected to reject withdraw attepmt if provided with wrong pin', () => {
    let response = subject.withdraw(50, account, '0000')
    expect(response.status).to.equal('error')
    expect(response.message).to.equal('You entered the wrong pin code, Please try again!')
  });
});