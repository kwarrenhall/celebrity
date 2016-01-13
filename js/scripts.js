$(document).ready(function() {
  $("form#match").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();


    if ((gender === 'male') && (age < 100) && (age > 60)) {
      $('#male60').show();
      }
      if ((gender === 'male') && (age < 60) && (age > 20)) {
        $('#male20').show();
        }
        if ((gender === 'female') && (age < 100) && (age > 60)) {
          $('#female60').show();
          }
          if ((gender === 'female') && (age < 60) && (age > 20)) {
            $('#female20').show();
            }
    event.preventDefault();

  });
});
