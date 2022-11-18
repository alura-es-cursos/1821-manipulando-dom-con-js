import checkComplete  from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

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
    task.appendChild(deleteIcon());

    list.appendChild(task);
    //console.log(evento);
}

btn.addEventListener("click", createTask);

}) ();