function concluirTarefa() {
    const concluir = document.querySelectorAll('.concluir');
    
    if (concluir.length > 0) {
        concluir.forEach((item) => {
            const tarefaElement = item.closest('.tarefa');
            if (tarefaElement) {
                item.addEventListener('click', () => {
                    console.log('clicou');
                    tarefaElement.classList.toggle('tarefa-concluida');
                });
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    concluirTarefa();
});