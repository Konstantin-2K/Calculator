let display = document.querySelector('.display');
let result = document.querySelector('.result');

let inputButtons = document.querySelectorAll('.input');

for (let button of inputButtons) {
    button.addEventListener('click', draw);
}


let funcButtons = document.querySelectorAll('.func');

for (let button of funcButtons) {
    button.addEventListener('click', operate);
}


function draw() {
    result.textContent += this.textContent;
}

let firstNum = 0;
let secondNum = 0;

function operate() {
    switch (this.textContent) {
        case "AC":
            clear();
            break;

        case "%":
            percentage();
            break;

        case "C":
            backspace();
            break;

        case "/":
            divide();
            break;

        case "*":
            multiply();
            break;

        case "-":
            minus();
            break;

        case "+":
            firstNum = result.textContent;
            display.textContent = result.textContent;
            result.textContent = '';

            plus(firstNum, secondNum);
            break;

        case "=":

            break;
    }
}

function plus(a, b) {
    return a + b;
}

function percentage(a, b) {
    return (b * a) / 100;
}

function minus(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function clear() {
    display.textContent = '';
    result.textContent = '';
}

function backspace() {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
}

/*setInterval(logger, 2000);

function logger() {
    console.log(input);
    console.log(firstNum);
}*/