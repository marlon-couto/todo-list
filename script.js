const criarTarefa = document.querySelector('#criar-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const redefinir = document.querySelector('#apaga-tudo');
const removerFinalizados = document.querySelector('#remover-finalizados');

const saveList = () => {
  localStorage.setItem('listaDeTarefas', listaDeTarefas.innerHTML);
};

criarTarefa.addEventListener('click', () => {
  const textoDaTarefa = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerText = textoDaTarefa.value;
  listaDeTarefas.appendChild(li);
  textoDaTarefa.value = '';
  saveList();
});

listaDeTarefas.addEventListener('click', (event) => {
  const tarefas = document.querySelectorAll('li');
  event.target.style.setProperty('background-color', 'gray');
  tarefas.forEach((element) => {
    if (element.style.backgroundColor === 'gray' && element !== event.target) {
      element.style.removeProperty('background-color');
    }
  });
});

listaDeTarefas.addEventListener('dblclick', (event) => {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
  saveList();
});

redefinir.addEventListener('click', () => {
  listaDeTarefas.innerHTML = '';
  saveList();
});

removerFinalizados.addEventListener('click', () => {
  const tarefasFinalizadas = document.querySelectorAll('li.completed');
  for (let index = 0; index < tarefasFinalizadas.length; index += 1) {
    listaDeTarefas.removeChild(tarefasFinalizadas[index]);
  }
  saveList();
});

window.onload = () => {
  if (localStorage.getItem('listaDeTarefas') !== undefined) {
    listaDeTarefas.innerHTML = localStorage.getItem('listaDeTarefas');
  }
};
