$(document).ready(function() {
  $("form#match").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    var name = ();
    if ((gender === 'male') && (age < 100) && (age > 60)) {
      name = Cristie Brinkley
      }

      $("#name1").text(name);
      $("#male60").show();

    event.preventDefault();

  });
});
