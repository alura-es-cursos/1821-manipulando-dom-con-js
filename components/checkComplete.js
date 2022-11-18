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

export default checkComplete;