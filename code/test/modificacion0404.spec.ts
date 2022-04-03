import 'mocha';
import {expect} from 'chai';
import {add} from '../src/modificacion0404';

describe('Ejercicio 1 - Tests', () => {
  it('La función ejecuta correctamente', () => {
    expect(add(2, 3)).to.be.equal(5);
    expect(add(-2, 3)).to.be.equal(1);
    expect(add(1.1, 1.1)).to.be.equal(2.2);
  });
});