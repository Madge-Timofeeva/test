let previousOperator = '';


function appendNumber(value) {
    const resultInput = document.getElementById('result'); //получение элемента result из DOM
    resultInput.value += value; //объединение текущего содержимого поля с добавленным значением
}

function appendOperator(operator) {
    const resultInput = document.getElementById('result');

    if (previousOperator === operator) {
        return; 
    }

    previousOperator = operator; //Здесь мы сохраняем переданный оператор (operator) в переменной previousOperator. Это делается для хранения предыдущего оператора и последующего сравнения с новым оператором.
    resultInput.value += operator;//- Эта строка кода добавляет значение оператора к текущему значению текстового поля. Она использует оператор +=, чтобы объединить (сконкатенировать) текущее значение и оператор, и затем присвоить обновленное значение свойству value элемента resultInput. Это обновляет текстовое поле на веб-странице, добавляя новый оператор к текущему содержимому.
}

function calculate() {
    const result = document.getElementById('result').value;
    const operators = ['+', '-', '*', '/'];//- В этой строке кода создается массив operators, содержащий допустимые операторы для вычислений.

    for (let i = 0; i < operators.length; i++) {
        const operatorIndex = result.indexOf(operators[i]);
        if (operatorIndex !== -1) {
            const operator = operators[i];
            const numbers = result.split(operator);
            const num1 = parseFloat(numbers[0]);
            const num2 = parseFloat(numbers[1]);

            let calculatedResult;
            if (operator === '+') {
                calculatedResult = num1 + num2;
            } else if (operator === '-') {
                calculatedResult = num1 - num2;
            } else if (operator === '*') {
                calculatedResult = num1 * num2;
            } else if (operator === '/') {
                calculatedResult = num1 / num2;
            }

            document.getElementById('result').value = calculatedResult;
            previousOperator = '';
            break;
        }
    }
}

function clearResult() {
    document.getElementById('result').value = '';
    previousOperator = '';
}