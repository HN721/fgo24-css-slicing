const saldo = window.localStorage.getItem("topupData");
const balance = document.querySelector(".main-balance");
const balanceMobile = document.querySelector(".left-mobile > p:last-child");
const convert = JSON.parse(saldo);

balance.textContent = `Rp.${numeral(convert.amount).format("0,0")}`;
balanceMobile.textContent = `Rp.${numeral(convert.amount).format("0,0")}`;
const income = JSON.parse(localStorage.getItem("topupData"));
const incomeText = document.querySelector(".left-income>p:last-child");
incomeText.textContent = `Rp.${numeral(income.subtotal).format("0,0")} +2%`;
