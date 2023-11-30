const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth() + 1;
const ano = hoje.getFullYear();
const data = `${dia}/${mes}/${ano}`;
const dataElement = document.getElementById('hoje');
dataElement.append(data);