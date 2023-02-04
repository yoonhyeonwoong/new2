const todoForm=document.getElementById("todo-form");
const todoInput=todoForm.querySelector("input");
const todoList=document.getElementById("todo-list");

let toDos=[];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const li=event.target.parentElement;
    toDos=toDos.filter((toDo)=>toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newToDo){
    const li=document.createElement("li");
    li.id=newToDo.id;
    const span=document.createElement("span");
    const button=document.createElement("button");
    button.innerText="x";
    span.innerText=newToDo.text;
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

}

function todoEnter(event){
    event.preventDefault();
    const newToDo=todoInput.value;
    todoInput.value="";
    const newToDoObject={
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    saveToDos();
}

todoForm.addEventListener("submit",todoEnter);

const savedToDos=localStorage.getItem("todos");

if(savedToDos !==null){
    const parsedToDos=JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}