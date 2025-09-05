let input = document.querySelector(".input");
let addBtn = document.querySelector(".add");
let result = document.querySelector(".tasks");

let tasks = [];

window.onload = function () {
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
  }
};

// ✅ إضافة مهمة جديدة
addBtn.addEventListener("click", function () {
  let inputText = input.value.trim();
  if (inputText === "") return;
  input.value = "";

  tasks.push(inputText);
  saveTasks();
  renderTasks();
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  result.innerHTML = "";
  tasks.forEach((taskText, index) => {
    let task = document.createElement("div");
    task.className = "task";

    let p = document.createElement("p");
    p.textContent = taskText;

    let btn = document.createElement("input");
    btn.type = "button";
    btn.className = "dlt";
    btn.value = "Delete";

    btn.addEventListener("click", function () {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    task.appendChild(p);
    task.appendChild(btn);
    result.appendChild(task);
  });
}
