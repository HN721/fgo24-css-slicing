const saldo = window.localStorage.getItem("topupData");
const balance = document.querySelector(".main-balance");
const convert = JSON.parse(saldo);

balance.textContent = `Rp.${numeral(convert.amount).format("0,0")}`;
