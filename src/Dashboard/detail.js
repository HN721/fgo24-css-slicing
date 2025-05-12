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

document.getElementById("detail").addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = document.getElementById("amount").value.trim();
  const note = document.getElementById("note").value.trim();

  const transferData = {
    amount,
    name,
    phone,
    image,
    date: new Date().toISOString(),
  };

  let existingTransfers = JSON.parse(localStorage.getItem("transfers")) || [];

  existingTransfers.push(transferData);

  localStorage.setItem("transfers", JSON.stringify(existingTransfers));
  document.getElementById("detail").reset();
  document.getElementById("successModal").style.display = "flex";
});
const button = document.querySelector(".btn-contact");

button.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});
