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
    document.getElementById('save-task').addEventListener('click', function() {
        var taskName = document.getElementById('task-name').value;
        var taskDescription = document.getElementById('task-description').value;
    
        // Aqui você pode adicionar o código para salvar a tarefa
    
        // Limpa o formulário
        document.getElementById('task-form').reset();
    
        // Fecha o modal
        var taskModal = bootstrap.Modal.getInstance(document.getElementById('taskModal'));
        taskModal.hide();
    });
    document.getElementById('save-list').addEventListener('click', function() {
        var listName = document.getElementById('list-name').value;
        var listEmoji = document.getElementById('list-emoji').value;
    
        // Aqui você pode adicionar o código para salvar a lista
    
        // Limpa o formulário
        document.getElementById('list-form').reset();
    
        // Fecha o modal
        var listModal = bootstrap.Modal.getInstance(document.getElementById('listModal'));
        listModal.hide();
    });
});

