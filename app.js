const todos = [];
const todoListElement = document.getElementById('todo-list');

function addTodo() {
    const input = document.getElementById('todo-input');
    // BUG: This does not trim the input value
    const newTodo = input.value;
    if (newTodo) {
        todos.push(newTodo);
        input.value = '';
        renderTodos();
    } else {
        alert('Please enter a todo!');
    }
}

function renderTodos() {
    todoListElement.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        const li = document.createElement('li');
        li.textContent = todos[i];
        li.className = 'todo-item';
        li.onclick = function() { toggleComplete(i); }; // BUG: Should toggle the completed state visually
        todoListElement.appendChild(li);
    }
}

function toggleComplete(index) {
    // BUG: This logic needs proper state to toggle
    todos[index] = todos[index]; // No actual toggle implementation
    renderTodos();
}

// TODO: Add a method to remove todos
// TODO: Save todos to local storage when added
// TODO: Load todos from local storage on app start