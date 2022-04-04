import 'mocha';
import {expect} from 'chai';
import {MergeSort} from '../../src/MergeSort/MergeSort';

describe('Solver - Tests', () => {
  // Creacion objetos
  const merge = new MergeSort();

  it('execute works for MergeSort', () => {
    expect(merge.execute([1, 2, 3])).to.be.eql([1, 2, 3]);
  });

  it('execute works for MergeSort', () => {
    expect(merge.execute([2, 3, 3])).to.be.eql([2, 3, 3]);
  });
});