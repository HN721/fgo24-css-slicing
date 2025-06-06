const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = window.localStorage.getItem("user");
  const convert = JSON.parse(data);
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  if (convert.email === email && convert.password === password) {
    Swal.fire({
      title: "Success Login",
      text: "Wait a Minute",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        // form.reset();
        window.location.href = "../Dashboard/dashboard.html";
      }
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login Failed!",
      text: "Incorrect Password or Email!",
    });
  }
});
function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  icon.src = isPassword
    ? "/src/pages/assets/eye-open.png"
    : "/src/pages/assets/eye-closed.png";
}
function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  icon.src = isPassword
    ? "/src/pages/assets/eye-open.png"
    : "/src/pages/assets/eye-closed.png";
}
