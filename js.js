console.log("Script Initialized");

// Utils
const pi = Math.PI;

// Squares

let squareSide = 5;
function squarePerimeter(side) { return side * 4; }
function squareArea(side) { return side * side; }

// Triangle

let triangle = { side1: 6, side2: 6, base: 4, height: 5.5 }
function triangleArea(base, height) { return (base * height) / 2 };
function trianglePerimeter(side1, side2, base) { return side1 + side2 + base; }

function isoscelesTriangleHeight(aSide, bSide, base) {
    if (aSide != bSide) return false;
    var squareSide = aSide * aSide;
    var baseSquare = (base / 2) * (base / 2);
    var heightSquare = squareSide - baseSquare;
    var result = Math.sqrt(heightSquare);

    return result;
}

// Circle
let circleRadius = 4;
function circleDiameter(radius) { return radius * 2 };
function circlePerimeter(diameter) { return Math.floor(diameter * pi) };
function circleArea(radius) { return Math.floor((circleRadius * circleRadius) * pi) };

// Web functionality

function calcCircle() {
    const input = document.getElementById("input-circle");
    const value = input.value;

    circleRadius = value;

    const label = document.getElementById("circle-label");
    label.innerHTML = `Diameter: ${circleDiameter(circleRadius)}, Perimeter: ${circlePerimeter(circleRadius)}, Area: ${circleArea(circleRadius)}`
}

function calcSquarePerimeter() {
    const input = document.getElementById("input-square");
    const value = input.value;

    squareSide = value;

    const label = document.getElementById("input-label");
    label.innerHTML = `Perimeter: ${squarePerimeter(squareSide)}, Area: ${squareArea(squareSide)}`
}

function calcTriangle() {
    const side1 = document.getElementById("input-triangle").value;
    const side2 = document.getElementById("input-triangle2").value;
    const base = document.getElementById("input-triangle3").value;
    const height = document.getElementById("input-triangle3").value;

    const label = document.getElementById("triangle-label");
    if (side1 && side2 && base && height) {
        label.innerHTML = `Perimeter: ${trianglePerimeter(parseInt(side1), parseInt(side2), parseInt(base))}, Area: ${triangleArea(parseInt(base), parseInt(height))}`
    } else {
        label.innerHTML = "You have to specify all the values!";
    }
}

const input = document.getElementById("input-square");
input.addEventListener("keydown", function onEvent(e) {
    if (e.key == "Enter") {
        calcTriangle();
        return false;
    }
});

const input2 = document.getElementById("input-triangle");
input2.addEventListener("keydown", function onEvent(e) {
    if (e.key == "Enter") {
        calcTriangle();
        return false;
    }
});
const input3 = document.getElementById("input-triangle2");
input3.addEventListener("keydown", function onEvent(e) {
    if (e.key == "Enter") {
        calcTriangle();
        return false;
    }
});
const input4 = document.getElementById("input-triangle3");
input4.addEventListener("keydown", function onEvent(e) {
    if (e.key == "Enter") {
        calcTriangle();
        return false;
    }
});
const input5 = document.getElementById("input-triangle4");
input5.addEventListener("keydown", function onEvent(e) {
    if (e.key == "Enter") {
        calcTriangle();
        return false;
    }
});

const input6 = document.getElementById("input-circle");
input6.addEventListener("keydown", function onEvent(e) {
    if (e.key == "Enter") {
        calcCircle();
        return false;
    }
});

const button1 = document.getElementById("button1");
addEventListener('click', function (e) {
    e.preventDefault();
})
const button2 = document.getElementById("button2");
addEventListener('click', function (e) {
    e.preventDefault();
})
const button3 = document.getElementById("button3");
addEventListener('click', function (e) {
    e.preventDefault();
})

function disallowEnter(e) {
    if (e.key == "Enter") {
        calcSquarePerimeter();
        return false;
    }
}

function disallowEnter2(e) {
    if (e.key == "Enter") {
        calcTriangle();
        return false;
    }
}