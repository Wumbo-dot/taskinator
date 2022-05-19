console.dir(window.document);

var buttonEL = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var creatTaskHandler = function(){
    var listItemEL = document.createElement("li");
    listItemEL.className = "task-item";
    listItemEL.textContent = "this is a new task";
    tasksToDoEl.appendChild(listItemEL);
}

buttonEL.addEventListener("click", creatTaskHandler);
