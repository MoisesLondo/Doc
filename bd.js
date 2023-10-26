const boton = document.getElementById("boton"); //Selecciona el botón
const tablaNombres = document.querySelector("#tabla-nombres");
boton.addEventListener("click", (e) => { //Agrega un evento al botón al hacer click
  e.preventDefault();
  
  const name = document.querySelector("input[name=name]").value;
  const email = document.querySelector("input[name=email]").value;
  const phone = document.querySelector("input[name=phone]").value;
  const message = document.querySelector("textarea[name=message]").value;
  const fecha = document.querySelector("input[name=date]").value;
  const hora = document.querySelector("input[name=time]").value;

  const nuevaFila = document.createElement("tr");
  const nuevaCeldaNombre = document.createElement("td");
  nuevaCeldaNombre.textContent = name;
  const nuevaCeldaCorreo = document.createElement("td");
  nuevaCeldaCorreo.textContent = email
  const nuevaCeldaTelefono = document.createElement("td");
  nuevaCeldaTelefono.textContent = phone;
  const nuevaCeldaFecha = document.createElement("td");
  nuevaCeldaFecha.textContent = fecha
  const nuevaCeldaHora = document.createElement("td");
  nuevaCeldaHora.textContent = hora
  nuevaFila.appendChild(nuevaCeldaNombre);
  nuevaFila.appendChild(nuevaCeldaCorreo);
  nuevaFila.appendChild(nuevaCeldaTelefono);
  nuevaFila.appendChild(nuevaCeldaFecha);
  nuevaFila.appendChild(nuevaCeldaHora);
  tablaNombres.querySelector("tbody").appendChild(nuevaFila);


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