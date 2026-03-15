function editTask(btn: HTMLButtonElement): void {
    const row = btn.closest('.todo-list') as HTMLElement;
    const span = row.querySelector('.task-text') as HTMLElement;
    const input = row.querySelector('.task-input') as HTMLInputElement;
    const icon = btn.querySelector('i') as HTMLElement;

    if (icon.classList.contains('fa-edit')) {
        input.value = span.textContent ?? '';
        span.style.display = 'none';
        input.style.display = 'inline-block';
        input.focus();
        icon.classList.replace('fa-edit', 'fa-save');
        btn.title = 'Save';
    } else {
        const val = input.value.trim();
        if (val) span.textContent = val;
        span.style.display = 'inline-block';
        input.style.display = 'none';
        icon.classList.replace('fa-save', 'fa-edit');
        btn.title = 'Edit';
    }
}

function deleteTask(btn: HTMLButtonElement): void {
    btn.closest('.todo-list')?.remove();
}

function addTask(): void {
    const section = document.querySelector('.tasks') as HTMLElement;
    const div = document.createElement('div');
    div.classList.add('todo-list');
    div.innerHTML = `
        <span class="task-text" style="display:none"></span>
        <input type="text" class="task-input" placeholder="Enter task name..." style="display:inline-block">
        <div class="todo-actions">
            <input type="checkbox">
            <button class="btn-action" onclick="editTask(this)" title="Save"><i class="fa fa-save"></i></button>
            <button class="btn-action btn-delete" onclick="deleteTask(this)" title="Delete"><i class="fa fa-trash"></i></button>
        </div>
    `;
    section.appendChild(div);
    (div.querySelector('.task-input') as HTMLInputElement).focus();
}