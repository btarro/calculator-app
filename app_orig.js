let calcDisplay;
let calcValue1;
let calcValue2;
let calcOperator;
let calcResult;
let lastOperator;

calcInit();

function calcInit() {
  const userClick = document.querySelectorAll(".btn");
  let eachBtn;
  for (eachBtn = 0; eachBtn < userClick.length; eachBtn++) {
    userClick[eachBtn].addEventListener("click", evalBtnClick);
  }

  calcValue1 = 0;
  calcValue2 = 0;
  calcOperator = undefined;
  calcResult = 0;

  calcDisplay = document.getElementById("output");

  calcDisplay.textContent = 0;
}

function evalBtnClick(e) {
  let clickedBtn = e.target.value;

  isNaN(clickedBtn) ? operatorAction(clickedBtn) : numberAction(clickedBtn);
}

function operatorAction(clickedBtn) {
  lastOperator = calcOperator;
  calcOperator = clickedBtn;
  clickedBtn == "C"
    ? calcInit()
    : clickedBtn == "+"
    ? additionCalc()
    : clickedBtn == "-"
    ? subtractionCalc()
    : clickedBtn == "x"
    ? multiplicationCalc()
    : clickedBtn == "÷"
    ? divisionCalc()
    : operatorAction(lastOperator);
}

function numberAction(clickedBtn) {
  !calcOperator
    ? ((calcValue1 = calcValue1 + clickedBtn),
      (calcDisplay.textContent = parseFloat(calcValue1).toLocaleString()))
    : ((calcValue2 = calcValue2 + clickedBtn),
      (calcDisplay.textContent = parseFloat(calcValue2).toLocaleString()));
}

function additionCalc() {
  if (calcValue2) {
    calcResult = parseFloat(calcValue1) + parseFloat(calcValue2);
    calcValue1 = calcResult;
    calcValue2 = 0;
    calcDisplay.textContent = calcValue1.toLocaleString({
      maxiumFractionDigits: 3,
    });
  }
}

function subtractionCalc() {
  if (calcValue2) {
    calcResult = parseFloat(calcValue1) - parseFloat(calcValue2);
    calcValue1 = calcResult;
    calcValue2 = 0;
    calcDisplay.textContent = calcValue1.toLocaleString({
      maxiumFractionDigits: 3,
    });
  }
}

function multiplicationCalc() {
  if (calcValue2) {
    calcResult = parseFloat(calcValue1) * parseFloat(calcValue2);
    calcValue1 = calcResult;
    calcValue2 = 0;
    calcDisplay.textContent = calcValue1.toLocaleString({
      maxiumFractionDigits: 3,
    });
  }
}

function divisionCalc() {
  if (calcValue2) {
    calcResult = parseFloat(calcValue1) / parseFloat(calcValue2);
    calcValue1 = calcResult;
    calcValue2 = 0;
    calcDisplay.textContent = calcValue1.toLocaleString({
      maxiumFractionDigits: 3,
    });
  }
}
