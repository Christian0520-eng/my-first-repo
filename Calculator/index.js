const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");

addBtn.addEventListener("click", () => {
  result.textContent = `Result: ${Number(num1.value) + Number(num2.value)}`;
});

subBtn.addEventListener("click", () => {
  result.textContent = `Result: ${Number(num1.value) - Number(num2.value)}`;
});

mulBtn.addEventListener("click", () => {
  result.textContent = `Result: ${Number(num1.value) * Number(num2.value)}`;
});

divBtn.addEventListener("click", () => {
  if (Number(num2.value) === 0) {
    result.textContent = "Cannot divide by zero!";
    return;
  }

  result.textContent = `Result: ${Number(num1.value) / Number(num2.value)}`;
});
