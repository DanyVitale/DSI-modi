namespace Types {
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
}