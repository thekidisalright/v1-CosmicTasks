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

function corHeader() {
  const header = document.getElementById("header");
  const sections = [
    { id: "como-funciona", color: "var(--darker-2)" },
    { id: "planos", color: "var(--darker-3)" },
    { id: "contato", color: "var(--darker-4)"},
    { id: "sobre", color: "var(--darker-5)" }
  ];

  for (let section of sections) {
    const element = document.getElementById(section.id);
    const rect = element.getBoundingClientRect();

    if (rect.top <= 0 && rect.bottom >= 0) {
      header.style.backgroundColor = section.color;
      return;
    }
  }

  header.style.backgroundColor = "transparent";
}

window.addEventListener("scroll", parallax);
window.addEventListener("scroll", corHeader);