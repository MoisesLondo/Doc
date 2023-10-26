const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("input[name=name]").value;
  const email = document.querySelector("input[name=email]").value;
  const phone = document.querySelector("input[name=phone]").value;
  const message = document.querySelector("textarea[name=message]").value;
  const fecha = document.querySelector("input[type=date]").value;
  const hora = document.querySelector("input[type=time]").value;

  // Comprobar si el número de teléfono ya existe en el localStorage
  const savedPhone = localStorage.getItem("phone");
  if (savedPhone === phone) {
    alert("Este número de teléfono ya ha sido registrado.");
    return;
  }
  const savedFecha = localStorage.getItem("fecha");
  const savedTime = localStorage.getItem("hora");
  if (savedFecha === fecha) {
    if (savedTime === hora) {
        alert("Esta hora ya ha sido registrada.");
        return;
      }
  }
 

  // Guardar los datos en el localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("phone", phone);
  localStorage.setItem("message", message);
  localStorage.setItem("fecha", fecha);
  localStorage.setItem("hora", hora);

  // Mostrar un mensaje de confirmación al usuario
  alert("Los datos del formulario se han guardado en el localStorage.");
}); 