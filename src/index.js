document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get the task description input
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;
    
    // Create new task list item
    const taskItem = document.createElement("li");
    taskItem.innerText = taskDescription;
    // Append new task to task list
    taskList.appendChild(taskItem);
    
    // Clear input field for next task
    taskInput.value = "";
  });
});

