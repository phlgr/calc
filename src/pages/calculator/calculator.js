import { createElement } from "../../utils/createElement";

export function createCalculator() {
  let number = null;
  let lastOperator = null;

  function calculate(input) {
    if (!isNaN(input)) {
      display.innerText = display.innerText + input;
    }
    if (isNaN(input)) {
      if (number) {
        switch (lastOperator) {
          case "+":
            number += Number(display.innerText);
            break;
          case "-":
            number = number - Number(display.innerText);
            break;
          case "*":
            number = number * Number(display.innerText);
            break;
          case "/":
            number = number / Number(display.innerText);
            break;
        }
      } else {
        number = Number(display.innerText);
      }
      lastOperator = input;
      display.innerText = "";
      if (input === "=") {
        console.log(number);
        display.innerText = number;
        number = null;
        lastOperator = null;
      }
    }
  }
  const display = createElement("div", {
    className: "calcDisplay",
  });
  const oneBtn = createElement("button", {
    className: "numBtn",
    innerText: "1",
    onclick: function () {
      calculate(oneBtn.innerText);
    },
  });
  const twoBtn = createElement("button", {
    className: "numBtn",
    innerText: "2",
    onclick: function () {
      calculate(twoBtn.innerText);
    },
  });
  const threeBtn = createElement("button", {
    className: "numBtn",
    innerText: "3",
    onclick: function () {
      calculate(threeBtn.innerText);
    },
  });
  const fourBtn = createElement("button", {
    className: "numBtn",
    innerText: "4",
    onclick: function () {
      calculate(fourBtn.innerText);
    },
  });
  const fiveBtn = createElement("button", {
    className: "numBtn",
    innerText: "5",
    onclick: function () {
      calculate(fiveBtn.innerText);
    },
  });
  const sixBtn = createElement("button", {
    className: "numBtn",
    innerText: "6",
    onclick: function () {
      calculate(sixBtn.innerText);
    },
  });
  const sevenBtn = createElement("button", {
    className: "numBtn",
    innerText: "7",
    onclick: function () {
      calculate(sevenBtn.innerText);
    },
  });
  const eightBtn = createElement("button", {
    className: "numBtn",
    innerText: "8",
    onclick: function () {
      calculate(eightBtn.innerText);
    },
  });
  const nineBtn = createElement("button", {
    className: "numBtn",
    innerText: "9",
    onclick: function () {
      calculate(nineBtn.innerText);
    },
  });
  const zeroBtn = createElement("button", {
    className: "numBtn zeroBtn",
    innerText: "0",
    onclick: function () {
      calculate(zeroBtn.innerText);
    },
  });
  const plusBtn = createElement("button", {
    className: "operatorBtn",
    innerText: "+",
    onclick: function () {
      calculate(plusBtn.innerText);
    },
  });
  const minusBtn = createElement("button", {
    className: "operatorBtn",
    innerText: "-",
    onclick: function () {
      calculate(minusBtn.innerText);
    },
  });
  const multiplyBtn = createElement("button", {
    className: "operatorBtn",
    innerText: "*",
    onclick: function () {
      calculate(multiplyBtn.innerText);
    },
  });
  const divideBtn = createElement("button", {
    className: "operatorBtn",
    innerText: "/",
    onclick: function () {
      calculate(divideBtn.innerText);
    },
  });
  const equalsBtn = createElement("button", {
    className: "equalsBtn",
    innerText: "=",
    onclick: function () {
      calculate(equalsBtn.innerText);
    },
  });
  return createElement("main", {
    className: "calcBody",
    children: [
      display,
      sevenBtn,
      eightBtn,
      nineBtn,
      divideBtn,
      fourBtn,
      fiveBtn,
      sixBtn,
      multiplyBtn,
      oneBtn,
      twoBtn,
      threeBtn,
      minusBtn,
      zeroBtn,
      plusBtn,
      equalsBtn,
    ],
  });
}
