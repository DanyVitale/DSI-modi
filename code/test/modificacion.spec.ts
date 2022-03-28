import 'mocha';
import {expect} from 'chai';
import {PrimeNumberInstance} from '../src/modificacion';

describe('Ejercicio 1 - Tests', () => {
  it('La función getNumberOfItems() funciona correctamente', () => {
    //PrimeNumberInstance.getPrimeNumberInstance().addItem([2, 3, 1]);
    expect(PrimeNumberInstance.getPrimeNumberInstance().getNumberOfItems()).to.be.equal(0);
  });

  it('La Función isPrime() funciona correctamente', () => {
    expect(PrimeNumberInstance.getPrimeNumberInstance().isPrime(3)).to.be.true;
    expect(PrimeNumberInstance.getPrimeNumberInstance().isPrime(2)).to.be.false;
    expect(PrimeNumberInstance.getPrimeNumberInstance().isPrime(5)).to.be.true;
    // expect(PrimeNumberInstance.getPrimeNumberInstance().getNumberOfItems()).to.be.equal(0);
  });

  it('La ', () => {
    expect(PrimeNumberInstance.getPrimeNumberInstance().getNumberOfItems()).to.be.equal(0);
  });
});
