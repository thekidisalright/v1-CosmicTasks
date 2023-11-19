const background = document.getElementById("background");
const estrelas = document.getElementById("estrelas");
const planeta1 = document.getElementById("planeta-1");
const planeta2 = document.getElementById("planeta-2");
const mulher = document.getElementById("mulher");
const homem = document.getElementById("homem");
const foregroundBack = document.getElementById("foreground-back");
const foregroundFront = document.getElementById("foreground-front");
const btn = document.getElementById("btn");
const comoFunciona = document.getElementById("como-funciona");

function smoothScroll($element) {
  const $toElement = document.querySelector($element);
  $toElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

function parallax() {
  const valor = window.scrollY;
  background.style.top = valor * 0.5 + "px";
  estrelas.style.top = valor * -0.5 + "px";
  planeta1.style.top = valor * 0.5 + "px";
  planeta2.style.top = valor * 0.5 + "px";
  mulher.style.top = valor * -0.5 + "px";
  mulher.style.left = valor * -0.5 + "px";
  homem.style.top = valor * -0.5 + "px";
  homem.style.right = valor * -0.5 + "px";
}

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const comoFuncionaSection = document.getElementById("como-funciona");
  const rect = comoFuncionaSection.getBoundingClientRect();

  if (rect.top <= 0 && rect.bottom >= 0) {
    header.style.backgroundColor = "var(--darker-2)"
  } else {
    header.style.backgroundColor = "transparent"
  }
});

window.addEventListener("scroll", parallax);