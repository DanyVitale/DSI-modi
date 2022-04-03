import {TwoDimensionalFigure} from "../abstracts/TwoDimensionalFigure";
import {ColorType} from "../types/ColorType";

export class Rectangle extends TwoDimensionalFigure {
  private readonly sides = 4;

  constructor(name: string, color: ColorType, private base: number = 1,
    private height: number = 1) {
    super(name, color);
  }

  getSides(): number {
    return this.sides;
  }

  getArea(): number {
    return this.base * this.height;
  }

  print(): void {
    console.log(`${this.getName()} is a ${this.getColor()} rectangle with a base of ${this.base} and a height of ${this.height}.`);
    console.log(`The area of the rectangle is ${this.getArea()}.`);
    console.log(`The Rectangle has ${this.getSides()} sides.`);
  }
}
