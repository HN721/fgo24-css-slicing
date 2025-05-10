const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (password.value !== confirmPassword.value) {
    alert("Password dan Konfirmasi Password tidak sama!");
    return;
  }

  const userData = {
    email: email.value,
    password: password.value,
  };

  localStorage.setItem("user", JSON.stringify(userData));

  alert("Registrasi berhasil!");
  form.reset();
});
function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  icon.src = isPassword
    ? "/src/pages/assets/eye-open.png"
    : "/src/pages/assets/eye-closed.png";
}
