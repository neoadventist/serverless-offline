'use strict';

const chai = require('chai');
const dirtyChai = require('dirty-chai');
const utils = require('../../src/utils');

const expect = chai.expect;
chai.use(dirtyChai);

describe('utils', () => {
  describe('#toPlainOrEmptyObject', () => {
    context('with a plain object', () => {
      it('should return the plain object', () => {
        const plainObject = { name: 'Leonardo' };
        expect(utils.toPlainOrEmptyObject(plainObject)).to.eq(plainObject);
      });
    });

    context('with a non plain object', () => {
      it('should return an empty object', () => {
        const nonPlainObject = [];
        expect(utils.toPlainOrEmptyObject(nonPlainObject)).to.eql({});
      });
    });
  });

  describe('#nullIfEmpty', () => {
    context('with a non empty object', () => {
      it('should return the non empty object', () => {
        const nonEmptyObject = { name: 'Leonardo' };
        expect(utils.nullIfEmpty(nonEmptyObject)).to.eq(nonEmptyObject);
      });
    });

    context('with an empty object', () => {
      it('should return null', () => {
        expect(utils.nullIfEmpty({})).to.be.null();
      });
    });
  });
});
