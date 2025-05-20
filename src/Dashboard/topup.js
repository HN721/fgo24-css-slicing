const amountInput = document.getElementById("amount-input");
const orderEl = document.querySelector(
  ".oder-payment:nth-child(2) p:nth-child(2)"
);
const deliveryEl = document.querySelector(
  ".oder-payment:nth-child(3) p:nth-child(2)"
);
const taxEl = document.querySelector(
  ".oder-payment:nth-child(4) p:nth-child(2)"
);
const subtotalEl = document.querySelector(
  ".oder-payment:nth-child(5) p:nth-child(2)"
);

amountInput.addEventListener("input", () => {
  const amount = parseFloat(amountInput.value.replace(/[^0-9]/g, "")) || 0;

  const delivery = 4000;
  const tax = Math.round(amount * 0.1);
  const subtotal = amount + delivery + tax;

  orderEl.textContent = `Idr. ${amount.toLocaleString()}`;
  deliveryEl.textContent = `Idr. ${delivery.toLocaleString()}`;
  taxEl.textContent = `Idr. ${tax.toLocaleString()}`;
  subtotalEl.textContent = `Idr. ${subtotal.toLocaleString()}`;
});
const submitBtn = document.getElementById("submit-button");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const paymentMethodInput = document.querySelector(
    'input[name="payment"]:checked'
  );

  if (!paymentMethodInput) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Silakan pilih metode pembayaran terlebih dahulu.",
    });
    return;
  }

  let newAmount = parseFloat(amountInput.value.replace(/[^0-9]/g, "")) || 0;
  const delivery = 4000;
  const tax = Math.round(newAmount * 0.1);
  const subtotal = newAmount + delivery + tax;

  const getSaldo = localStorage.getItem("topupData");
  let existingAmount = 0;

  if (getSaldo) {
    const finalSaldo = JSON.parse(getSaldo);
    existingAmount = finalSaldo.amount || 0;
  }

  const totalAmount = existingAmount + newAmount;

  const paymentMethod = paymentMethodInput.nextElementSibling.alt;
  const data = {
    amount: totalAmount,
    delivery,
    tax,
    subtotal,
    paymentMethod,
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem("topupData", JSON.stringify(data));

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Yeay! Sucess Top Up",
    showConfirmButton: false,
    timer: 1500,
  });
});
const nameElement = document.querySelector(".logo-right > p");
const nameElement2 = document.querySelector(".frame > p:nth-child(1)");
const phoneElement = document.querySelector(".frame > p:nth-child(2)");

const dataName = JSON.parse(localStorage.getItem("user-profile"));
console.log(dataName);
nameElement.textContent = dataName.name;
nameElement2.textContent = dataName.name;
phoneElement.textContent = dataName.phone;
