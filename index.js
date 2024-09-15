function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskValue}</span>
        <button onclick="toggleTask(this)">Complete</button>
        <button class="remove-btn" onclick="removeTask(this)">Remove</button>
    `;

    const taskList = document.getElementById('taskList');
    taskList.appendChild(li);

    taskInput.value = '';
}

function toggleTask(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
