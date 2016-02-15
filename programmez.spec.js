var assert = require('assert');
var chai = require('chai');

describe('Programmez', () => {
  var foo = '';
  before(() => foo = 'Programmez' );

  it('foo devrait valoir "Programmez!" (Assert)', () => {
    assert(foo == 'Programmez', 'OK');
  });
  it('foo devrait valoir "Programmez!" (BDD)', () => {
    chai.expect(foo).to.equal('Programmez');
  });
  it('foo devrait valoir "Programmez!" (TDD)', () => {
    chai.assert.equal(foo, 'Programmez');
  });
});
