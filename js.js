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


// Discounts
let price = 100;
let discount = 15;

function calcDiscount(price, discount) {
    let priceMinusDiscount = 100 - discount;
    let discountedPrice = (price * priceMinusDiscount) / 100;

    return discountedPrice;
}

// Average

let averageList = [];
let orderedAverageList;
let averageSum = 0;
let formatedAverageElements = "Values: "
const halfList = parseInt(averageList.length / 2);
const averageInput = document.getElementById("average-input");

function isEven(a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcAverage() { return averageSum / averageList.length }
function calcMedian() {
    if (isEven(averageList.length)) {
        const element1 = averageList[averageList.length / 2 - 1];
        const element2 = averageList[averageList.length / 2];
        const median = (element1 + element2) / 2;

        return median;
    } else {
        return averageList[(averageList.length - 1) / 2];
    }
}

// These two functions are modified by me, but not made by me.
function count(array, valorToCount) {
    return array.filter((element) => element === valorToCount).length;
}
function calcMode(values) {
    const [reps, mode] = values.reduce(
        (acc, val) => {
            const nn = count(values, val);
            if (nn === acc[0] && acc[1].every((item) => item !== val)) {
                acc[1].push(val);
            } else if (nn > acc[0]) {
                acc = [nn, [val]];
            }
            return acc;
        },
        [0, []]
    );

    return { reps, mode };
}
// -------------------- //

let averageLabel = document.getElementById("average-items-label");
let resultLabel = document.getElementById("average-result-label");
let medianLabel = document.getElementById("median-result-label");
let modeLabel = document.getElementById("mode-result-label");


function clearAverage() {
    resultLabel.innerHTML = `Average: 0`
    averageLabel.innerHTML = "Values: ";
    formatedAverageElements = "Values: ";
    medianLabel.innerHTML = `Median: 0`
    modeLabel.innerHTML = `Mode: 0`
    averageList = [];
    averageSum = 0;
}

function addValueToAverage() {
    const value = parseInt(averageInput.value)
    if (value) {
        averageList.push(value);
        formatedAverageElements = formatedAverageElements + value + ", ";

        calcAverage()
        averageSum = averageSum + value;
        resultLabel.innerHTML = `Average: ${calcAverage() ? calcAverage() : 0}`
        medianLabel.innerHTML = `Median: ${calcMedian()}`
        modeLabel.innerHTML = `Mode: ${calcMode(averageList) ? calcMode(averageList).mode : 0}`
        averageLabel.innerHTML = formatedAverageElements;

        orderedAverageList = averageList.sort(function (a, b) { return a - b; });
        averageInput.value = NaN;
    }
}

// Web functionality

function calcFinalDiscount() {
    const input1 = document.getElementById("input-discount").value;
    const input2 = document.getElementById("input-discount2").value;

    const label = document.getElementById("discount-label");
    if (input1 && input2) {
        label.innerHTML = `Final price: ${calcDiscount(input1, input2)}`;
    } else {
        label.innerHTML = "You have to specify all the values!";
    }
}

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

const squareInput = document.getElementById("input-square");
squareInput.addEventListener("keydown", function onEvent(e) {
    if (e.key == "Enter") {
        calcTriangle();
        return false;
    }
});

for (triangleInput of document.getElementsByClassName("triangle-input")) {
    triangleInput.addEventListener("keydown", function onEvent(e) {
        if (e.key == "Enter") {
            calcTriangle();
            return false;
        }
    });
}

const circleInput = document.getElementById("input-circle");
circleInput.addEventListener("keydown", function onEvent(e) {
    if (e.key == "Enter") {
        calcCircle();
        return false;
    }
});

for (discountInput of document.getElementsByClassName("discount-input")) {
    discountInput.addEventListener("keydown", function onEvent(e) {
        if (e.key == "Enter") {
            calcFinalDiscount();
            return false;
        }
    });
}
averageInput.addEventListener("keydown", function onEvent(e) {
    if (e.key == "Enter") {
        addValueToAverage()
        return false;
    }
});


for (button of document.getElementsByClassName("btn")) {
    addEventListener('click', function (e) {
        e.preventDefault();
    })
}


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

function disallowEnter3(e) {
    if (e.key == "Enter") {
        calcFinalDiscount();
        return false;
    }
}

function disallowEnter4(e) {
    if (e.key == "Enter") {
        return false;
    }
}