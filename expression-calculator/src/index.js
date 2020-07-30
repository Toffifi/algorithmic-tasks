function eval() {
    // Do not use eval!!!
    return;
}
const operation = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
}

function calculate(numStack, opStack, b) {
    const a = numStack.pop();
    const operation = opStack.pop();
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/': {
            if (b === 0) {
                throw new Error("TypeError: Division by zero.");
            } else {
                return a / b;
            }
        }               
    }
}

function checkBrackets (arr) {
    let valid = 0;
    for (let i in arr) {
        if (arr[i] === '(') {
            valid++;
        }
        if (arr[i] === ')') {
            valid--;
        }
    }
    if (valid !== 0) {
        throw new Error("ExpressionError: Brackets must be paired");
    }
}

function expressionCalculator(expr) {
    const arr = expr.trim().split('');
    checkBrackets(arr);
    const numStack = [];
    const opStack = [];
    let strNum = '';
    for (let i in arr) {
        if (arr[i].match(/\d/)) {
            strNum += arr[i];
            if (i == (arr.length - 1)) {
                numStack.push(Number(strNum));
            }
        }
        if (arr[i].match(/[+-\/\*]/)) {
            let priority = operation[arr[i]];
            let lastPriority = operation[opStack[opStack.length - 1]];
            let number = strNum.length > 0 ? Number(strNum) : numStack.pop();
            strNum = '';
            while (opStack.length > 0 && priority <= lastPriority && opStack[opStack.length - 1] !== '(') {
                number = calculate(numStack, opStack, number);
                lastPriority = operation[opStack[opStack.length - 1]];
            }
            opStack.push(arr[i]);
            numStack.push(number);
        }
        if (arr[i] === '(') {
            opStack.push(arr[i]);
        }
        if (arr[i] === ')') {     
            let number = strNum.length > 0 ? Number(strNum) : numStack.pop();
            strNum = '';
            while (opStack[opStack.length - 1] !== '(') {
                number = calculate(numStack, opStack, number);
            }
            numStack.push(number);
            opStack.pop();
        }
    }
    if (opStack.length > 0) {
        number = numStack.pop();
        while (opStack.length > 0) {
            number = calculate(numStack, opStack, number);
        }
        numStack.push(number);
    }
    return numStack[0];
}

module.exports = {
    expressionCalculator
}