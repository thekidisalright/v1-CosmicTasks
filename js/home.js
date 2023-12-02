const hoje = new Date();
const dia = hoje.getDate().toString().padStart(2, '0');
const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
const ano = hoje.getFullYear();
const data = `${dia}/${mes}/${ano}`;
const dataElement = document.getElementById('hoje');
dataElement.append(data);