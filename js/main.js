var task_input = document.querySelector("#taskInput"),
  task_btn = document.querySelector("#taskBtn"),
  tasks = document.querySelector("#tasks"),
  tasks_counter = document.getElementById("tasksCounter"),
  finished_tasks_counter = document.getElementById("finishedtasksCounter");

task_btn.onclick = function () {
  if (task_input.value !== "") {
    addNewTask();
    focusOnInput();
    finishetask();
    deleteTask();
    counter();
  } else {
    alert("Your task is empty");
  }
};

function addNewTask() {
  tasks.innerHTML += `<li class="list-group-item list-group-item-action list-group-item-warning d-flex justify-content-between">
  ${task_input.value}<i class="fa-solid fa-trash-can"  style="color: #ff0000;"></i>
  </li>`;
}

function focusOnInput() {
  task_input.value = "";
  task_input.focus();
}

function counter() {
  tasks_counter.innerHTML = tasks.children.length;
}
function finishetask() {
  for (let index = 0; index < tasks.children.length; index++) {
    const task = tasks.children[index];
    task.onclick = function () {
      task.classList.toggle("list-group-item-success");
      task.classList.toggle("list-group-item-warning");
      finishedCounter();
    };
  }
}

function deleteTask() {
  var delete_icons = document.getElementsByClassName("fa-trash-can");

  for (let index = 0; index < delete_icons.length; index++) {
    const delete_icon = delete_icons[index];
    delete_icon.onclick = function () {
      delete_icon.parentElement.remove();
      counter();
    };
  }
}

function finishedCounter() {
  var finished_tasks = document.getElementsByClassName(
    "list-group-item-success"
  );
  finished_tasks_counter.innerHTML = finished_tasks.length;
}
