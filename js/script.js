const astronauta1 = document.getElementById('astronauta-1');
const astronauta2 = document.getElementById('astronauta-2');

function tamanhoAstronauta() {
    astronauta2.style.height = astronauta1.offsetHeight + 'px';
}

window.addEventListener('resize', tamanhoAstronauta);

tamanhoAstronauta();