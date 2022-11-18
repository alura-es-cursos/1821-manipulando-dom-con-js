( () =>{  //inmediately invoke function expretion IIFE

const btn=document.querySelector("[data-form-btn]");

const createTask=  (evento) =>{
    evento.preventDefault();
    const input=document.querySelector("[data-form-input]");
    const list=document.querySelector("[data-list]");
    const value=input.value;
    input.value='';

    const task=document.createElement("li");
    task.classList.add("card");
    task.appendChild(checkComplete());
    const valueTask=document.createElement("span");
    valueTask.classList.add("task");
    valueTask.innerText=value;
    task.appendChild(valueTask);

    const trashIcon=document.createElement("i");
    trashIcon.classList.add("fas","fa-trash-alt","trashIcon", "icon");

    task.appendChild(trashIcon);
    list.appendChild(task);
    //console.log(evento);
}

btn.addEventListener("click", createTask);

const checkComplete=()=>{
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click",completeTask);
    return i;
}

const completeTask= (e)=>{
    const elemento=e.target;
    elemento.classList.toggle("fas");
    elemento.classList.toggle("far");
    elemento.classList.toggle("completeIcon");
}

}) ();