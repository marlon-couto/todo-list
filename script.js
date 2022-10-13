const criarTarefa = document.querySelector('#criar-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const redefinir = document.querySelector('#apaga-tudo');
const removerFinalizados = document.querySelector('#remover-finalizados');
const removerSelecionado = document.querySelector('#remover-selecionado');
const paraCima = document.querySelector('#mover-cima');
const paraBaixo = document.querySelector('#mover-baixo');

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
  event.target.classList.add('selected');
  tarefas.forEach((element) => {
    if (element !== event.target && element.classList.contains('selected')) {
      element.classList.remove('selected');
    }
  });
});

listaDeTarefas.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
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

paraCima.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected !== listaDeTarefas.firstElementChild) {
    const previous = document.querySelector('.selected').previousSibling;
    const oldValue = document.querySelector('.selected').outerHTML;
    selected.outerHTML = previous.outerHTML;
    previous.outerHTML = oldValue;
    saveList();
  }
});

paraBaixo.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected !== listaDeTarefas.lastElementChild) {
    const next = document.querySelector('.selected').nextSibling;
    const oldValue = document.querySelector('.selected').outerHTML;
    selected.outerHTML = next.outerHTML;
    next.outerHTML = oldValue;
    saveList();
  }
});

removerSelecionado.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.remove();
    saveList();
  }
});

window.onload = () => {
  if (localStorage.getItem('listaDeTarefas') !== undefined) {
    listaDeTarefas.innerHTML = localStorage.getItem('listaDeTarefas');
  }
};
