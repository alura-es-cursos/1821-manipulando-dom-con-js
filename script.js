const btn=document.querySelector("[data-form-btn]");

const createTask=  (evento) =>{
    evento.preventDefault();
    const input=document.querySelector("[data-form-input]");
    const list=document.querySelector("[data-list]");
    const value=input.value;
    input.value='';

    const task=document.createElement("li");
    task.classList.add("card");
    const contenido=`
    <div>
      <i class="far fa-check-square icon"></i>
      <span class="task">${value}</span>
      <i class="fas fa-trash-alt trashIcon icon"></i>
    </div>`;
    task.innerHTML=contenido;
    list.appendChild(task);
    //console.log(evento);
}

btn.addEventListener("click", createTask);

