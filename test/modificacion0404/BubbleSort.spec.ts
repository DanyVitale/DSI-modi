import 'mocha';
import {expect} from 'chai';
import {BubbleSort} from '../../src/BubbleSort/BubbleSort';

describe('Solver - Tests', () => {
  // Creacion objetos
  const bubble = new BubbleSort();

  it('execute works for BubbleSort', () => {
    expect(bubble.execute([1, 2, 3])).to.be.eql([1, 2, 3]);
  });

  it('execute works for BubbleSort', () => {
    expect(bubble.execute([2, 3, 3])).to.be.eql([2, 3, 3]);
  });
});