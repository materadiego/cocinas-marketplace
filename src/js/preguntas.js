const r1 = document.querySelector(".zonas-resp");
const r2 = document.querySelector(".como-pedir-resp");
const r3 = document.querySelector(".donde-esta-resp");
const r4 = document.querySelector(".puedo-retirar-resp");
const r5 = document.querySelector(".medios-pago-resp");
const r6 = document.querySelector(".sumar-restaurante-resp");
const flechaPreguntas1 = document.querySelector(".flecha-preguntas1");
const flechaPreguntas2 = document.querySelector(".flecha-preguntas2");
const flechaPreguntas3 = document.querySelector(".flecha-preguntas3");
const flechaPreguntas4 = document.querySelector(".flecha-preguntas4");
const flechaPreguntas5 = document.querySelector(".flecha-preguntas5");
const flechaPreguntas6 = document.querySelector(".flecha-preguntas6");
const p1 = document.querySelector(".zonas");
const p2 = document.querySelector(".como-pedir");
const p3 = document.querySelector(".donde-esta");
const p4 = document.querySelector(".puedo-retirar");
const p5 = document.querySelector(".medios-pago");
const p6 = document.querySelector(".sumar-restaurante");
const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");
const t4 = document.querySelector(".t4");
const t5 = document.querySelector(".t5");
const t6 = document.querySelector(".t6");

function preguntas1() {
  if (r1.classList.contains("p-is-active")) {
    r1.classList.remove("p-is-active");
    flechaPreguntas1.classList.remove("flechap-is-active");
    t1.classList.remove("text-is-active");
  } else {
    r1.classList.add("p-is-active");
    flechaPreguntas1.classList.add("flechap-is-active");
    t1.classList.add("text-is-active");
  }
}

function preguntas2() {
  if (r2.classList.contains("p-is-active")) {
    r2.classList.remove("p-is-active");
    flechaPreguntas2.classList.remove("flechap-is-active");
    t2.classList.remove("text-is-active");
  } else {
    r2.classList.add("p-is-active");
    flechaPreguntas2.classList.add("flechap-is-active");
    t2.classList.add("text-is-active");
  }
}

function preguntas3() {
  if (r3.classList.contains("p-is-active")) {
    r3.classList.remove("p-is-active");
    flechaPreguntas3.classList.remove("flechap-is-active");
    t3.classList.remove("text-is-active");
  } else {
    r3.classList.add("p-is-active");
    flechaPreguntas3.classList.add("flechap-is-active");
    t3.classList.add("text-is-active");
  }
}

function preguntas4() {
  if (r4.classList.contains("p-is-active")) {
    r4.classList.remove("p-is-active");
    flechaPreguntas4.classList.remove("flechap-is-active");
    t4.classList.remove("text-is-active");
  } else {
    r4.classList.add("p-is-active");
    flechaPreguntas4.classList.add("flechap-is-active");
    t4.classList.add("text-is-active");
  }
}

function preguntas5() {
  if (r5.classList.contains("p-is-active")) {
    r5.classList.remove("p-is-active");
    flechaPreguntas5.classList.remove("flechap-is-active");
    t5.classList.remove("text-is-active");
  } else {
    r5.classList.add("p-is-active");
    flechaPreguntas5.classList.add("flechap-is-active");
    t5.classList.add("text-is-active");
  }
}

function preguntas6() {
  if (r6.classList.contains("p-is-active")) {
    r6.classList.remove("p-is-active");
    flechaPreguntas6.classList.remove("flechap-is-active");
    t6.classList.remove("text-is-active");
  } else {
    r6.classList.add("p-is-active");
    flechaPreguntas6.classList.add("flechap-is-active");
    t6.classList.add("text-is-active");
  }
}

p1.addEventListener("click", preguntas1);
p2.addEventListener("click", preguntas2);
p3.addEventListener("click", preguntas3);
p4.addEventListener("click", preguntas4);
p5.addEventListener("click", preguntas5);
p6.addEventListener("click", preguntas6);
