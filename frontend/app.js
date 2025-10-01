const API_URL = "http://localhost:5000/api/todos";
const list = document.getElementById("todo-list");
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");

document.addEventListener("keydown", (e) => {
  if (e.key.length === 1 && e.key.match(/[a-zA-Z0-9]/)) {
    input.focus();
  }

  if (e.key === "Enter") {
    addBtn.click();
  }
});

async function loadTodos() {
  const res = await fetch(API_URL);
  const todos = await res.json();
  list.innerHTML = "";
  todos.forEach(addTodoToDOM);
}

function addTodoToDOM(todo) {
  const li = document.createElement("li");
  li.dataset.id = todo.id;
  li.innerHTML = `
    <div class="todo-content">
      <span class="drag-handle" style="cursor: grab; margin-right:8px;">☰</span>
      <input 
        type="checkbox" 
        id="todo-${todo.id}" 
        class="form-check-input"
        ${todo.completed ? "checked" : ""} 
        onchange="toggleTodo(${todo.id})"
      >
      <span class="${todo.completed ? "completed" : ""}">${todo.text}</span>
    </div>
    <div>
      <button onclick="deleteTodo(${todo.id})" class="delete-btn">Kaldır</button>
    </div>
  `;
  list.prepend(li);
}

addBtn.addEventListener("click", async () => {
  const text = input.value.trim();
  if (!text) return;
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  const newTodo = await res.json();
  addTodoToDOM(newTodo);
  input.value = "";
});

async function toggleTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: "PUT" });
  loadTodos();
}

async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadTodos();
}

const sortable = new Sortable(list, {
  handle: '.drag-handle',
  animation: 150,
  onEnd: async function (evt) {
    const ids = Array.from(list.children).map(li => li.dataset.id);
    console.log('Yeni sıra:', ids);
  }
});

loadTodos();