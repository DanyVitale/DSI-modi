import 'mocha';
import {expect} from 'chai';
import {add} from '../src/modificacion0404';

describe('Ejercicio 1 - Tests', () => {
  it('La función getNumberOfItems() funciona correctamente', () => {
    expect(add(2, 3)).to.be.equal(5);
  });
});