const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const phone = params.get("phone");
const image = params.get("image");

const detailBox = document.querySelector(".detail-img");

if (name && phone && image) {
  detailBox.innerHTML = `
    <div>
      <img src="${image}" alt="${name}" />
      <div class="frame">
        <p>${name}</p>
        <p>${phone}</p>
        <button>
          <img src="../img/ceklis.png" alt="" />Verified
        </button>
      </div>
    </div>
    <img src="../img/star.png" alt="Favorite" />
  `;
} else {
  detailBox.innerHTML = `<p>User tidak ditemukan</p>`;
}

let transferData = null; // global

document.getElementById("detail").addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = document.getElementById("amount").value.trim();
  const note = document.getElementById("note").value.trim();

  transferData = {
    amount,
    note,
    name,
    phone,
    image,
    date: new Date().toISOString(),
  };

  document.getElementById("pinModal").style.display = "flex";
});
document.getElementById("submitPin").addEventListener("click", function () {
  const pinInputs = document.querySelectorAll(".pin-inputs input");
  let enteredPin = "";

  pinInputs.forEach((input) => {
    enteredPin += input.value;
  });

  if (enteredPin === "123456") {
    let existingTransfers = JSON.parse(localStorage.getItem("transfers")) || [];
    existingTransfers.push(transferData);
    localStorage.setItem("transfers", JSON.stringify(existingTransfers));
    document.getElementById("detail").reset();
    document.getElementById("pinModal").style.display = "none";
    document.getElementById("successModal").style.display = "flex";
  } else {
    alert("PIN salah, coba lagi.");
  }
});
