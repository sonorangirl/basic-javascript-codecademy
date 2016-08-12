//Add interactivity to Task App

var taskInput = document.getElementById("new-task"); //#new-task
var addButton = document.getElementsByTagName("button")[0];
var completedTaskHolder = document.getElementById("completed-tasks"); //#completed-tasks
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //#incomplete-tasks

//Create a new Task List Item
var createTaskItem = function(taskString) {
    //Create a new list item in TODO section with:
    var listItem = document.createElement("li");
        //A checkbox
        var checkbox = document.createElement("input");
        //A label generated from input field
        var label = document.createElement("label");
        //input (text)
        var editInput = document.createElement("input");
        //Two buttons: edit and delete
        var newEditButton = document.createElement("button");
        var newDeleteButton = document.createElement("button");
    
    //each element needs modifying
    
    checkbox.type = "checkbox";
    editInput.type = "text";
    newEditButton.innerText = "Edit";
    newEditButton.className = "edit";
    newDeleteButton.innerText = "Delete";
    newDeleteButton.className = "delete";
    label.innerText = taskString;
    
    //Each element needs Appending to the #incomplete-tasks ul
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(newEditButton);
    listItem.appendChild(newDeleteButton);
    
    return listItem;
}


//Add a new task
var addTask = function() {
    if (taskInput.value === "") {
        alert("You need to enter a task first!");
    } else {
    console.log("Add button...");
    var listItem = createTaskItem(taskInput.value);
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskComplete);
    taskInput.value = "";
    }
}


//Edit an existing task   
var editTask = function() {
    console.log("Edit task...");
    
    var listItem = this.parentNode;
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    var containsClass = listItem.classList.contains("editMode");
    var editButton = listItem.querySelector("button.edit");
    
    //if the class of the parent is "editMode"
    if(containsClass) {
        //switch from Edit Mode
        //label text becomes inputs value
        label.innerText = editInput.value; 
        //Save button reverts back to Edit button
        editButton.innerText = "Edit";
        editButton.classList.remove("save");
        
    } else {
        //switch to Edit Mode
        //input value becomes label text
        editInput.value = label.innerText;
        //Change Edit button to a Save button
        editButton.innerText = "Save";
        editButton.classList.add("save");
    }
     
    //Toggle editMode
    listItem.classList.toggle("editMode");
    
}
    
    
//Mark tasks as complete
var taskComplete = function() {
    console.log("Task complete...");
    //Move list item from TODO section to COMPLETED section
        //Append li to #completed-tasks ul
        var listItem = this.parentNode;
        completedTaskHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskIncomplete);
}


//Mark tasks as incomplete
var taskIncomplete = function() {
    console.log("Task not complete...");
    //Move list item from COMPLETED section to TODO section
        //Append li to #incomplete-tasks ul
        var listItem = this.parentNode;
        incompleteTaskHolder.appendChild(listItem);
        bindTaskEvents(listItem, taskComplete);
}


//Delete tasks
var deleteTask = function() {
    console.log("delete task...");
    //When delete button is pressed
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
        //Remove the list item
        ul.removeChild(listItem);
}  

//Bind click events to buttons
var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
    console.log("bind events..");
    
    //select it's children
    var editButton = taskListItem.querySelector("button.edit");
    //var saveButton = taskListItem.querySelector("button.save");
    var deleteButton = taskListItem.querySelector("button.delete");
    var checkbox = taskListItem.querySelector("input[type=checkbox]");
    
        //bind editTask to editButton
        editButton.onclick = editTask;
    
        //bind saveTask to saveButton
        //saveButton.onclick = saveTask;
    
        //bind deleteTask to deleteButton
        deleteButton.onclick = deleteTask;
    
        //bind checkboxEventHandler to checkbox
        checkbox.onchange = checkboxEventHandler;
}


//Set click event for addTask function 
addButton.addEventListener("click", addTask);

//Cycle through #incomplete-tasks ul li's
    for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
        //bind events to li's children (taskCompleted)
        bindTaskEvents(incompleteTaskHolder.children[i], taskComplete);
    }

//Cycle through #complete-tasks ul li's
    for (var i = 0; i < completedTaskHolder.children.length; i++) {
        //bind events to li's children (taskInomplete)
        bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
    }    
        
        
        