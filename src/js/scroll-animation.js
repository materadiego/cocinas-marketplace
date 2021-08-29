window.addEventListener("scroll", function () {
  var animado = document.querySelectorAll(".animado");

  for (var i = 0; i < animado.length; i++) {
    var altura = window.innerHeight / 1.3;

    var distancia = animado[i].getBoundingClientRect().top;

    if (distancia <= altura) {
      animado[i].classList.add("aparece");
    }
  }
});
