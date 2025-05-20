const form = document.getElementById("form-profile");
let transferData = null; // global

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("full_name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  console.log(name, phone, email);
  transferData = {
    name,
    phone,
    email,
  };
  localStorage.setItem("user-profile", JSON.stringify(transferData));
  Swal.fire({
    title: "Success Update Profile",
    text: "Wait a Minute",
    icon: "success",
  }).then((result) => {
    if (result.isConfirmed) {
      // form.reset();
      window.location.href = "../Dashboard/dashboard.html";
    }
  });
});
const nameElement = document.querySelector(".logo-right > p");
const dataName = JSON.parse(localStorage.getItem("user-profile"));
console.log(dataName);
nameElement.textContent = dataName.name;
