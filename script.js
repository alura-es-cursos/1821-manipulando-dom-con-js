const btn = document.querySelector('[data-form-btn]'); // Selecciona el primer elemento del documento que tenga el atributo 'data-form-btn'.
console.log(btn); // Imprime en la consola el elemento 'btn' seleccionado.


btn.addEventListener('click', (evento) => { // Agrega un evento 'click' al botón seleccionado.
  evento.preventDefault(); // Previene el comportamiento predeterminado del evento 'click', que es recargar la página en este caso.
  const input = document.querySelector('[data-form-input]'); // Selecciona el primer elemento del documento que tenga el atributo 'data-form-input'.
  console.log(input.value); // Imprime en la consola el valor del elemento 'input' seleccionado.
});


// import checkComplete from './components/checkComplete.js';
// import deleteIcon from './components/deleteIcon.js';

// const btn = document.querySelector('[data-form-btn]');

// const createTask = (evento) => {
//   evento.preventDefault();
//   const input = document.querySelector('[data-form-input]');
//   const value = input.value;
//   const list = document.querySelector('[data-list]');
//   const task = document.createElement('li');
//   task.classList.add('card');
//   input.value = '';
//   //backticks
//   const taskContent = document.createElement('div');

//   const titleTask = document.createElement('span');
//   titleTask.classList.add('task');
//   titleTask.innerText = value;
//   taskContent.appendChild(checkComplete());
//   taskContent.appendChild(titleTask);
//   // task.innerHTML = content;

//   task.appendChild(taskContent);
//   task.appendChild(deleteIcon());
//   list.appendChild(task);
// };

// //Arrow functions o funciones anonimas
// btn.addEventListener('click', createTask);
