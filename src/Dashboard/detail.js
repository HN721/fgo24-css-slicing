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

  const amounts = document.getElementById("amount").value.trim();
  const amount = parseFloat(amounts.replace(/[^0-9]/g, "")) || 0;

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
    Swal.fire({
      title: `TRANSFER TO ${name} `,
      html: `
        <img src="../img/contact.png" alt="Custom image" width="200" height="200" style="margin-bottom: 20px;" />
        <h2 style="margin: 0; font-size: 24px;">Yeay Transfer <span style="color: green;">Success</span></h2>
        <p style="margin-top: 8px; color: #666;">Thank you for using this application for your financial</p>
      `,
      showCancelButton: true,
      confirmButtonText: "Done",
      cancelButtonText: "Transfer Again",
      customClass: {
        popup: "custom-popup",
        confirmButton: "custom-confirm-btn",
        cancelButton: "custom-cancel-btn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "dashboard.html";
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = "transfer.html";
      }
    });
  } else {
    document.getElementById("pinModal").style.display = "none";

    Swal.fire({
      title: `TRANSFER TO ${name} `,
      html: `
        <img src="../img/failed.png" alt="Custom image" width="200" height="200" style="margin-bottom: 20px;" />
        <h2 style="margin: 0; font-size: 24px;">Oops Transfer <span style="color: red;">Failed</span></h2>
        <p style="margin-top: 8px; color: #666;">Sorry Theres is an issue for your transfer, try again later !</p>
      `,
      showCancelButton: true,
      confirmButtonText: "Try Again",
      cancelButtonText: "Back to Dashboard",
      customClass: {
        popup: "custom-popup",
        confirmButton: "custom-confirm-btn",
        cancelButton: "custom-cancel-btn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "transfer.html";
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = "dashboard.html";
      }
    });
  }
});
const nameElement = document.querySelector(".logo-right > p");
const dataName = JSON.parse(localStorage.getItem("user-profile"));
console.log(dataName);
nameElement.textContent = dataName.name;
