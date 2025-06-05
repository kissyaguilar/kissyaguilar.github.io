const dateElement = document.getElementById('currentDate');

function updateDateTime() {
    const now = new Date();
    dateElement.textContent = `${now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })} ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

function formatDueDate(dueDate) {
    if (!dueDate) return 'No Due Date';
    const date = new Date(dueDate);
    return `Due Date: ${date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })}`;
}

function addTask() {
    const input = document.getElementById('taskInput');
    const category = document.getElementById('categorySelect').value;
    const dueDate = document.getElementById('dueDate').value;
    const taskText = input.value.trim();
    if (taskText === '') return;

    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.className = 'todo-item list-group-item d-flex align-items-center justify-content-between';
    li.innerHTML = `
        <input type="checkbox" onchange="this.parentElement.classList.toggle('completed')">
        <div class="todo-details">
            <span class="todo-task">${taskText}</span>
            <span class="todo-meta">${category} | ${formatDueDate(dueDate)}</span>
        </div>
        <button class="delete-btn btn btn-link" onclick="this.parentElement.remove()">✕</button>
    `;
    todoList.appendChild(li);
    input.value = '';
    document.getElementById('dueDate').value = '';
}

function clearTasks() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
}

document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('clearBtn').addEventListener('click', clearTasks);