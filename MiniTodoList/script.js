// DOM Elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const themeToggle = document.getElementById("theme-toggle");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("darkMode", isDarkMode);
});

// Check saved theme
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️ Light Mode";
}

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
});

// Render Tasks
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = `task-item ${task.completed ? "completed" : ""}`;
    taskItem.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button class="complete-btn">${
          task.completed ? "Undo" : "Complete"
        }</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // Complete Task
    const completeBtn = taskItem.querySelector(".complete-btn");
    completeBtn.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      renderTasks();
    });

    // Delete Task
    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      renderTasks();
    });

    taskList.appendChild(taskItem);
  });
}

// Save to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Initial render
renderTasks();
