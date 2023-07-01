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
  