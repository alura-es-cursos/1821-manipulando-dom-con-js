( () => {

const btn = document.querySelector('[data-form-btn]');// Seleccionamos el botón que tiene el atributo 'data-form-btn'
console.log(btn); // Imprime en la consola el botón seleccionado.

const createTask = () => {// Función para crear la tarea y agregarla a la lista
  event.preventDefault();// Previene el comportamiento predeterminado del evento 'click', que es recargar la página en este caso.
  const input = document.querySelector('[data-form-input]');// Seleccionamos el input que tiene el atributo 'data-form-input'.
  const value = input.value;
   const list = document.querySelector('[data-list]');// Seleccionamos la lista donde queremos agregar las tareas (esto asume que tienes un elemento con el atributo 'data-list').
   const task = document.createElement("li"); // Creamos un nuevo elemento <li> para representar la tarea.
  task.classList.add("card");
  input.value = ''; // Limpiamos el contenido del input después de obtener su valor.
  let taskContent = document.createElement("div")
  taskContent.appendChild(checkComplete());

  const titleTask = document.createElement("span")
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(titleTask);
  const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>
  `;
  //task.innerHTML = content;// Agregamos el contenido a la tarea.
  task.appendChild(taskContent);
  list.appendChild(task); // Agregamos la tarea a la lista.
};


btn.addEventListener('click', createTask);// Agregamos el evento 'click' al botón para llamar a la función 'createTask'.

// Función para obtener el ícono de "check".
const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener("click", completeTask);
  return i;
};

//funcion para cambiar el icono
const completeTask = () =>{
  const elemet = event.target;
  elemet.classList.toggle("fas");
  elemet.classList.toggle("completeIcon");
  elemet.classList.toggle("fas");
}


})();



























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
