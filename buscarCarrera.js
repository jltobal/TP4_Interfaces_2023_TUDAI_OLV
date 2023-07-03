function filterCareers() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toUpperCase();
    var careerList = document.getElementById('careerList');
    var careers = careerList.getElementsByClassName('career');

    for (var i = 0; i < careers.length; i++) {
      var career = careers[i];
      var text = career.innerText.toUpperCase();

      if (text.indexOf(filter) > -1) {
        career.style.display = '';
      } else {
        career.style.display = 'none';
      }
    }

    // Mostrar la lista de carreras cuando se realiza una búsqueda
    careerList.style.display = 'block';
  }

  function selectCareer(career) {
    var selectedCareer = career.innerText;
    // Redireccionar al HTML correspondiente según la carrera seleccionada
    if (selectedCareer === 'Diseño Gráfico') {
      window.location.href = 'diseño.html';
    } else if (selectedCareer === 'Profesorado de Artes Visuales') {
      window.location.href = 'diseño.html';
    } 
  }

  var careers = document.getElementsByClassName('career');
  for (var i = 0; i < careers.length; i++) {
    careers[i].addEventListener('click', function() {
      selectCareer(this);
    });
  }