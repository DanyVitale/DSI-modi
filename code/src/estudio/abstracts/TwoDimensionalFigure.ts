import {ColorType} from '../types/ColorType';

export abstract class TwoDimensionalFigure {
  constructor(private name: string, private color: ColorType) {
  }
  getName(): string {
    return this.name;
  }
  getColor(): ColorType {
    return this.color;
  }
  setColor(color: ColorType): void {
    this.color = color;
  }
    abstract getArea(): number;
    abstract print(): void;
}
