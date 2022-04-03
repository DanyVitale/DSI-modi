import { TwoDimensionalFigure } from "./abstracts/TwoDimensionalFigure";
import { ThreeDimensionalFigure } from "./abstracts/ThreeDimensionalFigure";
import { FigureCollection } from "./collections/FigureCollection";
import { Cube } from "./figures/Cube";
import { Rectangle } from "./figures/Rectangle";

const myTwoDimensionalFigures= new FigureCollection<TwoDimensionalFigure>([
  new Rectangle('Rectangle 1', 'red', 2, 3),
  new Rectangle('Rectangle 2', 'blue', 4, 5),
]);

const myThreeDimensionalFigures = new FigureCollection<ThreeDimensionalFigure>([
  new Cube('Cube 1', 'red', 2, 3, 4),
  new Cube('Cube 2', 'blue', 4, 5, 6),
]);

myTwoDimensionalFigures.print();
myThreeDimensionalFigures.print();
