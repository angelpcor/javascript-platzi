console.log("Script Initialized");

// Utils
const pi = Math.PI;

// Squares
console.group("Squares");

let squareSide = 5;

function squarePerimeter(side) { return side * 4; }
function squareArea(side) { return side * side; }

console.log(`Each side of the square measures ${squareSide}cm`);
console.log(`The perimeter of said square is ${squarePerimeter(squareSide)}cm`);
console.log(`The area of the square is ${squareArea(squareSide)}cm`);


console.groupEnd();

// Triangle
console.group("Triangles");

let triangle = { side1: 6, side2: 6, base: 4, height: 5.5 }

function triangleArea(base, height) { return (base * height) / 2 };
function trianglePerimeter(side1, side2, base) { return side1 + side2 + base; }

console.log(`The sides of the triangle both measure ${triangle.side1}cm and it has a base of ${triangle.base}cm and a height of ${triangle.height}cm`);
console.log(`The triangle has a perimeter of ${trianglePerimeter(triangle.side1, triangle.side2, triangle.base)}cm`);
console.log(`The triangle has an area of ${triangleArea(triangle.base, triangle.height)}cm`);

console.groupEnd();

// Circle
console.group("Circle");
let circleRadius = 4;

function circleDiameter(radius) { return radius * 2 };
function circlePerimeter(diameter) { return Math.floor(diameter * pi) };
function circleArea(radius) { return Math.floor((circleRadius * circleRadius) * pi) };

console.log(`The circle has a radius of ${circleRadius}cm`);
console.log(`The circle has a diameter of ${circleDiameter(circleRadius)} cm`);
console.log(`The circle has a perimeter of ${circlePerimeter(circleDiameter(circleRadius))} cm and an area of ${circleArea(circleRadius)} cm`);

console.groupEnd();