import {ColorType} from '../types/ColorType';

export abstract class ThreeDimensionalFigure {
  constructor(private readonly name: string, private color: ColorType) {
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
    abstract getVolume(): number;
    abstract print(): void;
}
