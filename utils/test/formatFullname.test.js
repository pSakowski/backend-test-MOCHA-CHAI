const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error if "fullName" arg is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg has different format than <firstname> <lastname>', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
    expect(formatFullname('John Test Doe')).to.equal('Error');
  });

  it('should return formatted full name if proper arg', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('jOhn dOe')).to.equal('John Doe');
  });

});
