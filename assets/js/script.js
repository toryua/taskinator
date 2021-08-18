var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIDCounter = 0;
var createTaskEl = function(taskDataObj)
 {
     var listItemEl = document.createElement("li");
     listItemEl.className = "task-item";

     // add task id as a custom attribute
     listItemEl.setAttribute("data-task-id", taskIdCounter);

     var taskInfoEl = document.createElement("div");
     taskInfoEl.className = "task-info";
     taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name+ "</h3><span class='task=type'>"  + taskDataObj.type + "</span>";
     listItemEl.appendChild(taskInfoEl);

     tasksToDoEl.appendChild(listItemEl);

     //increase task counter for next unique id
     taskIdCounter++;
 }
var createTaskHandler = function (event) {

    event.preventDefault ();
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listitemEl);
}
buttonEl.addEventListener("click", createTaskHandler);


