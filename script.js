let display = document.querySelector('.display');
display.textContent = 0;
let result = document.querySelector('.result');

let numButtons = document.querySelectorAll('.input');
let funcButtons = document.querySelectorAll('.func');
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');
let equalsBtn = document.querySelector('.equals');

for (let button of numButtons) {
    button.addEventListener('click', displayDraw);
}

for (let button of funcButtons) {
    button.addEventListener('click', appendFunc);
}

clearBtn.onclick = () => {
    display.textContent = 0;
    result.textContent = '';
    firstNum = '';
    secondNum = '';
    currentOperation = null;
    resultNum = '';
}

deleteBtn.onclick = () => {
    if (display.textContent.length === 1) {
        display.textContent = 0;
    } else if (display.textContent.length !== '0') {
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    }
}

equalsBtn.onclick = () => {
    if (display.textContent !== '0') {
        evaluate();
    }
}

function displayDraw() {
    if (display.textContent === '0') {
        display.textContent = '';
    }
    display.textContent += this.textContent;
}

const functions = ['+', '-', '*', '/', '%'];
let firstNum = '';
let secondNum = '';
let currentOperation = null;
let resultNum = '';
let expression = [];

function evaluate() {
    let expression = display.textContent.split(currentOperation);
    firstNum = Number(expression[0]);
    secondNum = Number(expression[1]);
    if (secondNum === 0 && currentOperation === '/') {
        result.textContent = "Error!";
    } else {
        result.textContent = roundResult(operate(currentOperation, firstNum, secondNum));
    }

}

function roundResult(num) {
    return Math.round(num * 1000) / 1000;
}

function appendFunc() {
    switch (this.textContent) {
        case "+":
            currentOperation = '+';
            break;
        case "-":
            currentOperation = '-';
            break;
        case "*":
            currentOperation = '*';
            break;
        case "/":
            currentOperation = '/';
            break;
        case "%":
            currentOperation = '%';
            break;
    }
    if (!functions.includes(display.textContent.charAt(display.textContent.length - 1)) && result.textContent === '') {
        display.textContent += currentOperation;
        evaluate();
    } if (result.textContent !== '') {
        display.textContent = `${result.textContent}${currentOperation}`;
        result.textContent = '';
        appendFunc();
    }
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if (b === 0) return null;
            else return divide(a, b);
        case '%':
            return percent(a, b)
        default:
            return null
    }
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function percent(a, b) {
    return b * a / 100;
}

setInterval(logger, 2000);
function logger() {
    console.log(firstNum);
    console.log(secondNum);
    console.log(currentOperation);
    console.log(resultNum);
}