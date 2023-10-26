const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("input[name=name]").value;
  const email = document.querySelector("input[name=email]").value;
  const phone = document.querySelector("input[name=phone]").value;
  const message = document.querySelector("textarea[name=message]").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("message", message);

  // Mostrar un mensaje de confirmación al usuario
  alert("Los datos del formulario se han guardado en el localStorage.");
});