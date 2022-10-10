const criarTarefa = document.querySelector('#criar-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');

criarTarefa.addEventListener('click', () => {
  const textoDaTarefa = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerText = textoDaTarefa.value;
  listaDeTarefas.appendChild(li);
  textoDaTarefa.value = '';
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
  if (event.target.className !== 'completed') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
});

const redefinir = document.querySelector('#apaga-tudo');
redefinir.addEventListener('click', () => {
  listaDeTarefas.innerHTML = '';
});
