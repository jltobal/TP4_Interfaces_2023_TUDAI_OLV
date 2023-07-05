document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Ha sido registrado en la materia. Comprobante 263548");
});

function mostrarFormulario() {
        let formulario = document.getElementById("formulario");
        formulario.style.display = "block";
    };

