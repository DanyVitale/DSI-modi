import {ThreeDimensionalFigure} from "../abstracts/ThreeDimensionalFigure";
import {TwoDimensionalFigure} from "../abstracts/TwoDimensionalFigure";

export class FigureCollection<T extends ThreeDimensionalFigure | TwoDimensionalFigure> {
  constructor(private figures: T[]) {
  }

  getFigures(): T[] {
    return this.figures;
  }

  addFigure(figure: T): void {
    this.figures.push(figure);
  }

  getFigure(index: number): T {
    return this.figures[index];
  }

  print(): void {
    this.figures.forEach((figure) => figure.print());
  }
}
