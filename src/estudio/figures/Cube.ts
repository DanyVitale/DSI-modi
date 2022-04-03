import {ThreeDimensionalFigure} from "../abstracts/ThreeDimensionalFigure";
import {ColorType} from "../types/ColorType";

export class Cube extends ThreeDimensionalFigure {
  private readonly faces: number = 6;

  constructor(name: string, color: ColorType, private base: number = 1,
    private height: number = 1, private depth: number = 1) {
    super(name, color);
  }

  getFaces(): number {
    return this.faces;
  }

  getVolume(): number {
    return this.base * this.height * this.depth;
  }

  print(): void {
    console.log(`${this.getName()} is a ${this.getColor()} cube with a base of ${this.base} and a height of ${this.height} and a depth of ${this.depth}.`);
    console.log(`The volume of the cube is ${this.getVolume()}.`);
  }
}

