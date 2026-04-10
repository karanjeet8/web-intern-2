const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // mark complete
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});