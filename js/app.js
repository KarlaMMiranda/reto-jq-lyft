//Función que hace desaparecer mi imagen principal
$(document).ready(function() {
  setTimeout(function() {
      $("#view-splash").fadeOut(1500);
    },2000);
});

//Función que hace aparecer la siguiente pantalla
$(document).ready(function() {
    setTimeout(function() {
      $("#second-section").fadeIn(1500);
    },2000);
});

//Función que arroja los tres dígitos aleatorios
function digitos() {
    var x = Math.floor((Math.random() * 900) + 100);
    document.getElementById("numbers").innerHTML = x;
}

//Función para habilitar y desabilitar botones
function validatePhoneNumber() {
  var $buttonToVerifyView = $('.validate-phone');

  if($(this).val().trim().length === 10) {
    $buttonToVerifyView.removeAttr('disabled');
    // $linkToVerifyView.attr("href", "verify-view.html");
  }else {
    $buttonToVerifyView.attr('disabled', true);
    // $linkToVerifyView.attr('href','#');
  }
}
