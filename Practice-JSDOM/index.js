const submitButton = document.getElementById("submit");

const inputPrice1 = document.getElementById("price1");
const inputPrice2 = document.getElementById("price2");
const inputPrice3 = document.getElementById("price3");
const inputPrice4 = document.getElementById("price4");
const inputTotal = document.getElementById("total");
submitButton.addEventListener("click", (e) => {
  let sum =
    Number(inputPrice1.value) +
    Number(inputPrice2.value) +
    Number(inputPrice3.value) +
    Number(inputPrice4.value);
  inputTotal.value = sum;
});
