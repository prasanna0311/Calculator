const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;
numbersEl.forEach((number) => {
  number.addEventListener("click", (event) => {
    if (event.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (event.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += event.target.innerText;
    display2El.innerText = dis2Num;
    // console.log( display2El.innerText = dis2Num);
  });
});
operationEl.forEach((operation) => {
  operation.addEventListener("click", (event) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = event.target.innerText;

    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
}
function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
    console.log(result);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}
// operation();

equalEl.addEventListener("click", () => {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  tempResultEl.innerText = "";
  dis2Num = result;
  dis1Num = "";
});
clearAllEl.addEventListener("click", () => {
  dis1Num = "";
  dis2Num = "";
  display1El.innerText = "";
  display2El.innerText = "";
  result = "";
  tempResultEl.innerText = "";
});
clearLastEl.addEventListener("click", () => {
  display2El.innerText = "";
  dis2Num = "";
});

window.addEventListener("keydown", (event) => {
  if (
    event.key === "0" ||
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4" ||
    event.key === "5" ||
    event.key === "6" ||
    event.key === "7" ||
    event.key === "8" ||
    event.key === "9" ||
    event.key === "."
  ) {
    clickButtonEl(event.key);
  } else if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "/" ||
    event.key === "%"
  ) {
    clickOperation(event.key);
  } else if (event.key === "*") {
    clickOperation("x");
  } else if (event.key == "Enter" || event.key === "=") {
    clickEqual();
  } else if (
    event.keyCode >= 65 ||
    event.key <= 93 ||
    event.keyCode >= 9 ||
    event.key <= 48 ||
    event.keyCode >= 112 ||
    event.key <= 222
  ) {
    return alert("Only Numbers are Allowed !!!");
  }
});
function clickButtonEl(key) {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operationEl.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
function clickEqual() {
  equalEl.click();
}
