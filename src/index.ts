

namespace App {
    interface TwoDimensionalFigure {
        getName(): string;
        getColor(): ColorType;
        getArea(): number;
    }
    
    class Rectangle implements TwoDimensionalFigure {
      private readonly sides = 4;
    
      constructor(private name: string, private color: ColorType, private width: number = 1, private height: number = 1) {}
    
      getName(): string {
        return this.name;
      }
    
      getSide(): number {
        return this.sides;
      }
    
      getColor(): ColorType {
        return this.color;
      }
    
      getWidth(): number {
        return this.width;
      }
    
      getHeight(): number {
        return this.height;
      }
    
      setColor(color: ColorType): void {
        this.color = color;
      }
    
      setName(name: string): void {
        this.name = name;
      }
    
      getArea(): number {
        return this.width * this.height;
      }
    }
    
    class Circle implements TwoDimensionalFigure {
      private readonly sides = 1;
    
      constructor(private name: string, private color: ColorType, private radius: number = 1) {}
    
      getName(): string {
        return this.name;
      }
    
      getSide(): number {
        return this.sides;
      }
    
      getColor(): ColorType {
        return this.color;
      }
    
      getRadius(): number {
        return this.radius;
      }
    
      setColor(color: ColorType): void {
        this.color = color;
      }
    
      setName(name: string): void {
        this.name = name;
      }
    
      getArea(): number {
        return this.radius * this.radius * Math.PI;
      }
    }
    
    abstract class TwoDimensionalFigureCreator {
        public abstract factoryMethod(): TwoDimensionalFigure;
    
        public logic(): void {
          const twoDimensionalFigure = this.factoryMethod();
          console.log(`Created ${twoDimensionalFigure.getName()} with color ${twoDimensionalFigure.getColor()}`);
          console.log(`Area: ${twoDimensionalFigure.getArea()}`);
        }
    }
    
    class RectangleCreator extends TwoDimensionalFigureCreator {
      constructor(private name: string, private color: ColorType, private width: number, private height: number) {
        super();
      }
    
      public factoryMethod(): TwoDimensionalFigure {
        return new Rectangle(this.name, this.color, this.width, this.height);
      }
    }
    
    class CircleCreator extends TwoDimensionalFigureCreator {
      constructor(private name: string, private color: ColorType, private radius: number) {
        super();
      }
    
      public factoryMethod(): TwoDimensionalFigure {
        return new Circle(this.name, this.color, this.radius);
      }
    }
    
    function clientCode(twoDimensionalFigure: TwoDimensionalFigureCreator) {
      twoDimensionalFigure.logic();
    }
    
    clientCode(new RectangleCreator('Rectangle', 'red', 10, 20));
    clientCode(new CircleCreator('Circle', 'red', 10));
}


