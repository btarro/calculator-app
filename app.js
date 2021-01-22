let display = document.querySelector("#output");
let firstOperand = "";
let secondOperand = "";
let operator = null;

document.querySelectorAll(".btn.numbers").forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    if (display.textContent.length === 10) {
      return;
    }

    const number = numberButton.value;

    if (!operator) {
      firstOperand += number;
      display.textContent = firstOperand;
      return;
    }
    secondOperand += number;
    display.textContent = secondOperand;
  });
});

document.querySelectorAll(".btn.operators").forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    const currentOperation = operatorButton.value;

    if (firstOperand) {
      operator = currentOperation;
    }
  });
});

document.querySelector(".btn.equal").addEventListener("click", () => {
  if (firstOperand && operator && secondOperand) {
    const result = calculate();
    firstOperand = `${result}`;
    secondOperand = "";
    operator = null;
    display.textContent = result;
  }
});

document.querySelector(".btn.special-clear").addEventListener("click", () => {
  firstOperand = "";
  secondOperand = "";
  operator = null;
  display.textContent = 0;
});

function calculate() {
  const operations = {
    "+": () => parseFloat(firstOperand) + parseFloat(secondOperand),
    "-": () => parseFloat(firstOperand) - parseFloat(secondOperand),
    x: () => parseFloat(firstOperand) * parseFloat(secondOperand),
    "÷": () => parseFloat(firstOperand) / parseFloat(secondOperand),
  };

  return operations[operator]();
}
