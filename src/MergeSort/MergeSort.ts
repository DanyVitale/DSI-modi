import {Strategy} from "../Strategy/strategy";
/**
 * Class MergeSort implements the strategy pattern.
 */
export class MergeSort implements Strategy {
  /**
   * Execute() sorts the data using the merge sort algorithm.
   * @param data Number[]
   */
  execute(data: number[]) {
    return this.divide(data);
    console.log(`Merge sort applied to ${data}`);
  }

  /**
   * MergeSort describes Merge Algorithm
   * @param data Number[]
   * @returns Number[]
   */
  divide(data: number[]): number[] {
    const halfLength = Math.ceil(data.length / 2);
    let low = data.slice(0, halfLength);
    let high = data.slice(halfLength);

    if (halfLength > 1) {
      low = this.divide(low);
      high = this.divide(high);
    }

    return this.combine(low, high);
  }

  /**
   * SortedSort describes ordenate algorithm
   * @returns Number[]
   */
  combine(low: number[], high: number[]): number[] {
    let indexLow = 0;
    let indexHigh = 0;
    const lengthLow = low.length;
    const lengthHigh = high.length;
    const combined = [];

    while (indexLow < lengthLow || indexHigh < lengthHigh) {
      const lowItem = low[indexLow];
      const highItem = high[indexHigh];
      if (lowItem !== undefined) {
        if (highItem === undefined) {
          combined.push(lowItem);
          indexLow++;
        } else {
          if (lowItem <= highItem) {
            combined.push(lowItem);
            indexLow++;
          } else {
            combined.push(highItem);
            indexHigh++;
          }
        }
      } else {
        if (highItem !== undefined) {
          combined.push(highItem);
          indexHigh++;
        }
      }
    }
    return combined;
  }
}

