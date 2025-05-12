// Income

const saldo = window.localStorage.getItem("topupData");
const balance = document.querySelector(".main-balance");
const balanceMobile = document.querySelector(".left-mobile > p:last-child");
const convert = JSON.parse(saldo);

balance.textContent = `Rp.${numeral(convert.amount).format("0,0")}`;
balanceMobile.textContent = `Rp.${numeral(convert.amount).format("0,0")}`;
const income = JSON.parse(localStorage.getItem("topupData"));
const incomeText = document.querySelector(".left-income>p:last-child");
incomeText.textContent = `Rp.${numeral(income.subtotal).format("0,0")} +2%`;
// Expense
const expense = document.querySelector(".left-expense > p:last-child");
const expenseData = JSON.parse(localStorage.getItem("transfers"));
// console.log(expenseData[expenseData.length - 1].amount);
expense.textContent = `Rp.${numeral(
  expenseData[expenseData.length - 1].amount
).format("0,0")} +2%`;
//transaction

const people = document.querySelector(".people");
expenseData.forEach((element) => {
  const trans = document.createElement("div");
  const img = document.createElement("img");
  const trans1 = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  p3.style = "color: #d00000";
  p1.textContent = element.name;
  p2.textContent = "Send";
  p3.textContent = `Rp.${element.amount}`;
  img.src = element.image;
  trans1.append(p1, p2);
  trans.append(img, trans1, p3);
  people.append(trans);
});
