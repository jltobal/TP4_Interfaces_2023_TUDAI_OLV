/*
$(document).ready(function() {
    $('#email').on('input', function() {
      var email = $(this).val();
      var isValid = validateEmail(email);
      
      $(this).removeClass('is-valid is-invalid');
      
      if (isValid) {
        $(this).addClass('is-valid');
      } else {
        $(this).addClass('is-invalid');
      }
    });
  });
  
  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  */

  document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".formulario form");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada
  
      var emailInput = document.querySelector("#email");
      var email = emailInput.value.trim();
      var passwordInput = document.querySelector("#password");
      var password = passwordInput.value.trim();
      var errorMensaje = document.querySelector("#errorMensaje");
  
      // Validar el correo electrónico
      var emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        return;
      } else {
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
      }
  
      // Validar que los campos no estén incompletos
      if (email === "" || password === "") {
        return;
      }
  
      // Verificar si el correo ingresado es "admin@artesvisuales.com"
      if (email === "admin@artesvisuales.com") {
        window.location.href = "./index.html"; // Redirigir a la página index.html
        return;
      }
  
      // Verificar si el correo ingresado es "alumno@artesvisuales.com"
      if (email === "alumno@artesvisuales.com") {
        window.location.href = "./otra_pagina.html"; // Redirigir a otra_pagina.html
        return;
      }
  
      // Mostrar mensaje de error si el correo no es válido
      errorMensaje.textContent = "El correo no coincide con un usuario registrado";
    });
  });
  
  
  