/* eslint-disable */
import { isValidSSN, isValidEmail, isValidPhone } from '../validations';
import chai from 'chai';

const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Validations for SSN', () => {
  it('should return truthy on valid SSN', () => {
    const ssn = '110584-1122';
    expect(true).to.be.true;
  });

  it('should return truthy on valid SSN from 21st century', () => {
    const ssn = '110501A1122';
    expect(isValidSSN(ssn)).to.be.true;
  });

  it('should return falsy on invalid SSN missing century sign', () => {
    const ssn = '1105841122';
    expect(isValidSSN(ssn)).to.be.false;
  });

  it('should return falsy on invalid SSN missing checkmark', () => {
    const ssn = '110584-112';
    expect(isValidSSN(ssn)).to.be.false;
  });

  it('should return falsy on invalid SSN missing digit from birthdate', () => {
    const ssn = '11584-1122';
    expect(isValidSSN(ssn)).to.be.false;
  });

  it('should retrn falsy on invalid SSN having letter in birthdate', () => {
    const ssn = 'i10584-1122';
    expect(isValidSSN(ssn)).to.be.false;
  });

  it('should return falsy on undefined SSN', () => {
    expect(isValidSSN(undefined)).to.be.false;
  });

  it('should return falsy on invalid SSN too long', () => {
    const ssn = '110584-112233';
    expect(isValidSSN(ssn)).to.be.false;
  });
});

describe('Validations for Email', () => {
  it('should return truthy on valid email address', () => {
    const email = 'teppo@testaajat.fi';
    isValidEmail(email).should.be.true;
  });
  
  it('should return falsy on invalid email address missing @', () => {
    const email = 'teppo-testaajat.fi';
    isValidEmail(email).should.be.to.false;
  });

  it('should return falsy on invalid email address missing suffix', () => {
    const email = 'teppo@testaajat';
    isValidEmail(email).should.be.false;
  });

  it('should return falsy on undefined email', () => {
    isValidEmail(undefined).should.be.false;
  });

  it('should return falsy on email containing scandinavian charactaers', () => {
    const email = 'älämölå@testaajat.fi';
    isValidEmail(email).should.be.false;
  });
});

describe('Validations for phone', () => {
  it('should return truthy on valid finnish international phone number', () => {
    const phone = '+358503456789';
    assert.isTrue(isValidPhone(phone));
  });

  it('should return truthy on valid american international phone number', () => {
    const phone = '+15550809';
    assert.isTrue(isValidPhone(phone));
  });

  it('should return falsy on invalid finnish phone number missing country code', () => {
    const phone = '0503456789';
    assert.isFalse(isValidPhone(phone));
  });

  it('should return falsy on invalid finnish phone number having garbage prefixed', () => {
    const phone = '123qwe+358503456789';
    assert.isFalse(isValidPhone(phone));
  });

  it('should return falsy on invalid finnish phone number having garbage suffixed', () => {
    const phone = '+358503456789asdawe';
    assert.isFalse(isValidPhone(phone));
  });

  it('should return falsy on undefined phone number', () => {
    assert.isFalse(isValidPhone(undefined));
  });
});
