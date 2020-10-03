let currentResult = 0;
let previousResult = 0;
const logEntry = [];

addBtn.addEventListener('click', calculatorForAll.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculatorForAll.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculatorForAll.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculatorForAll.bind(this, 'DIVIDE'));

function userNumber() {
  return Number(userInput.value);
}

function calculatorForAll(register) {
  const initialValue = userNumber();
  let calculation = '';
  if (register === 'ADD') {
    calculation = '+';
    currentResult = currentResult + initialValue;
  } else if (register === 'SUBTRACT') {
    calculation = '-';
    currentResult = currentResult - initialValue;
  } else if (register === 'MULTIPLY') {
    calculation = '*';
    currentResult = currentResult * initialValue;
  } else if (register === 'DIVIDE') {
    calculation = '/';
    currentResult = currentResult / initialValue;
  }
  const outputText = previousResult + `${calculation}` + userInput.value;
  logOperation(register, previousResult, initialValue, currentResult);
  previousResult = currentResult;
  outputResult(currentResult, outputText);
}

function logOperation(operator, initialValue, userValue, endResult) {
  const logger = {
    operation: operator,
    startValue: initialValue,
    inputValue: userValue,
    result: endResult,
  };
  logEntry.push(logger);
  console.log(logEntry);
}
