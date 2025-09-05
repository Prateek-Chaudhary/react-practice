let calculatorList = [
  "+",
  "-",
  "*",
  "/",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "C",
];

let calculatorButtonsScreen = document.querySelector(".calculator_buttons");

calculatorList.forEach((item) => {
  let span = document.createElement("span");
  span.className = "calc_btn";
  span.textContent = item;
  calculatorButtonsScreen.appendChild(span);
});

let inputBox = document.getElementById("screen");
let buttons = document.querySelectorAll(".calc_btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.target.textContent;
    if (value === "C") {
      inputBox.value = "";
    } else if (isOperator(value) && isOperator(inputBox.value.slice(-1))) {
      console.log("Cannot put two operators at once....");
    } else inputBox.value += value;
  });
});

function isOperator(op) {
  return (
    op === "+" ||
    op === "-" ||
    op === "*" ||
    op === "/" ||
    op === "." ||
    op === "^"
  );
}

let calculate = document.getElementById("calculate");
calculate.addEventListener("click", (e) => {
  let result = eval(inputBox.value);
  console.log(result);
  inputBox.value = result;
});
