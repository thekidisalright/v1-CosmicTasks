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

function smoothScroll(elementId) {
  try {
    const element = document.querySelector(elementId);
    if (!element) {
      console.error(`Element with ID ${elementId} not found.`);
      return;
    }
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    setTimeout(() => {
      window.scrollBy(0, -99);
    }, 1000); // Adjust delay as needed
  } catch (error) {
    console.error(`Error in smoothScroll: ${error}`);
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
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
  const inicioNav = document.getElementById("nav-inicio");
  header.style.backgroundColor = "transparent";
  const sections = [
    { id: "como-funciona", color: "var(--darker-2)", nav: "nav-como-funciona" },
    { id: "planos", color: "var(--darker-3)", nav: "nav-planos" },
    { id: "contato", color: "var(--darker-4)", nav: "nav-contato" },
    { id: "sobre", color: "var(--darker-5)", nav: "nav-sobre" }
  ];

  let isAnySectionActive = false;

  for (let section of sections) {
    const element = document.getElementById(section.id);
    const nav = document.getElementById(section.nav);
    const rect = element.getBoundingClientRect();

    if (rect.top <= 100 && rect.bottom >= 100) {
      header.style.backgroundColor = section.color;
      nav.classList.add("active");
      isAnySectionActive = true;
    } else {
      nav.classList.remove("active");
    }
  }

  if (!isAnySectionActive) {
    inicioNav.classList.add("active");
  } else {
    inicioNav.classList.remove("active");
  }
}

window.addEventListener("scroll", parallax);
window.addEventListener("scroll", corHeader);