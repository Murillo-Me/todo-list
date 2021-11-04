
function createTodoDiv(toDoObj) {

    const newTodoDiv = document.createElement('div');
    newTodoDiv.classList.add('todo-inner-container');
    newTodoDiv.innerHTML = `
            <div class="todo-item-container" data-id="${toDoObj.id}">
                <span class="todo-check-icon"><i class="project-icon far fa-circle"></i></span>
                <span class="todo-title">${toDoObj.title}</span>
                <button class="delete-todo"><i class="far fa-times-circle fa-2x"></i></button>
                <div class="todo-status">
                    <div class="priority-status" data-priority="${toDoObj.priority}"><i class="fas fa-circle"></i></div>
                    <div class="dueDate-status"><span class="dueDate-text">${toDoObj.dueDate}</span></div>
                </div>
            </div>
    `;

    const deleteTodoBtn = newTodoDiv.querySelector('button.delete-todo')
    deleteTodoBtn.addEventListener('click', deleteTodoDiv)

    const checkBtn = newTodoDiv.querySelector('.todo-check-icon')
    console.log(checkBtn);
    checkBtn.addEventListener('click', completeTodo)

    const todoContainer = document.querySelector('.todo-outer-container');
    todoContainer.append(newTodoDiv);

    return newTodoDiv
}

function createProjectElement(newProject) {

    const newProjectElement = document.createElement('li');
    newProjectElement.classList.add('project-item');
    newProjectElement.setAttribute('data-project', newProject.id)
    newProjectElement.innerHTML = `
            <i data-project="${newProject.id}" class="project-icon ${newProject.icon}"></i>${newProject.title}
    `;

    const projectsContainer = document.querySelector('.project-list');
    projectsContainer.append(newProjectElement);

    return newProjectElement
}

function deleteTodoDiv() {
    if (this.closest('.todo-inner-container') === null) {
        console.error("ERROR: Couldn't find todo element to delete. No todo-inner-container found.");
        return
    }
    this.closest('.todo-inner-container').remove();

    if (document.querySelector('.add-todo-btn').style.display === 'none') toggleAddToDoBtn();

}

function toggleAddToDoBtn() {
    const addToDoBtn = document.querySelector('.add-todo-btn')
    
    if (addToDoBtn.style.display === 'none') {
        addToDoBtn.style.display = 'block'
    } else {
        addToDoBtn.style.display = 'none'
    }
}

function getCurrentDate() {
    // https://stackoverflow.com/a/29774197

    let currentDate = new Date();
    const offset = currentDate.getTimezoneOffset()
    currentDate = new Date(currentDate.getTime() - (offset*60*1000))
    return currentDate.toISOString().split('T')[0]
}

function toggleActivePriorityBtn() {
    const siblings = [...this.parentElement.children]
    siblings.forEach(element => element.classList.remove('active'));
    this.classList.toggle('active');
}

function toggleDueDateBtn() {
    if (this.classList.contains('active')) return

    const dueDateBtns = this.parentElement.querySelectorAll('button')
    const dateInput = this.parentElement.querySelector("input[type='date']")

    dueDateBtns.forEach(btn => btn.classList.remove('active'))
    this.classList.add('active')

    dateInput.classList.toggle('active')
}

function createTodoInputElement() {
    const todoInputElement = document.createElement('div');
    todoInputElement.classList.add('todo-inner-container','input-todo-container');
    const currentDate = getCurrentDate();

    todoInputElement.innerHTML = `
            <div class="todo-item-container">
                <span class="todo-check-icon"><i class="project-icon far fa-circle"></i></span>
                <input type="text" class="todo-title"></span>
                <button class="delete-todo"><i class="far fa-times-circle fa-2x"></i></button>
            </div>
            <div class="new-todo-config-container">
                <ul class="priority-input-list">
                    <span class="config-title">Priority: </span>
                    <li data-priority="2" class="priority-input-item active"><i class="fas fa-star"></i></li>
                    <li data-priority="1" class="priority-input-item"><i class="fas fa-star"></i></li>
                    <li data-priority="0" class="priority-input-item"><i class="fas fa-star"></i></li>
                </ul>
                <div class="dueDate-config-container">
                    <label for="dueDate" class="dueDate-label config-title">Due date:</label>
                    <button class="noDueDate-btn active"><i class="far fa-calendar-times"></i></button>
                    <input type="date" name="dueDate" id="dueDate" value="${currentDate}">
                    <button class="yesDueDate-btn"><i class="far fa-calendar"></i></button>
                </div>
                <button class="add-todo-config-btn">Add</button>
            </div>
            
    `;
    
    const dueDateBtns = todoInputElement.querySelectorAll('.dueDate-config-container button')
    dueDateBtns.forEach(btn => btn.addEventListener('click', toggleDueDateBtn))

    const priorityInputList = todoInputElement.querySelectorAll('.priority-input-item')
    priorityInputList.forEach(btn => btn.addEventListener('click', toggleActivePriorityBtn))

    const deleteTodoBtn = todoInputElement.querySelector('button.delete-todo')
    deleteTodoBtn.addEventListener('click', deleteTodoDiv)

    const todoContainer = document.querySelector('.todo-outer-container');
    todoContainer.append(todoInputElement);

    const todoTitleInput = todoInputElement.querySelector('.todo-title')
    todoTitleInput.focus();

    return todoInputElement;
}

function createProjectInputElement() {
    const projectInputElement = document.createElement('li');
    projectInputElement.classList.add('project-item', 'input-project-container');

    projectInputElement.innerHTML = `
                                        <i data-project="placeholder" class="project-icon fas fa-adjust"></i>
                                        <input type="text" name="projectTitle" id="projectTitle">
    `;
    
    const projectsContainer = document.querySelector('.project-list');
    projectsContainer.append(projectInputElement);

    const projectTitleInput = projectInputElement.querySelector('#projectTitle')
    projectTitleInput.focus();

    return projectInputElement;
}

function clearScreen() {
    document.querySelectorAll('.todo-inner-container').forEach((elem) => elem.remove());
}

function loadProject(projectID, todoArray) {
    clearScreen();

    todoArray.forEach(todo => {
        if (todo.parentProjectID === projectID) {
            // console.log(todo);
            createTodoDiv(todo)
        }
    })

    if (document.querySelector('.add-todo-btn').style.display === 'none') toggleAddToDoBtn();
}

function removeInputDiv() {
    if (document.querySelector('.input-todo-container') !== null) {
        const todoInputElement = document.querySelector('.input-todo-container')
        todoInputElement.remove();
        return
    } 
    if (document.querySelector('.input-project-container') !== null) {
        const projectInputElement = document.querySelector('.input-project-container')
        projectInputElement.remove();
        return
    }
}

function completeTodo() {
    console.log(this.parentElement.getAttribute('data-id'));
}

export {createTodoDiv, createTodoInputElement, deleteTodoDiv, createProjectInputElement, createProjectElement, toggleAddToDoBtn, removeInputDiv, loadProject}

{/* <div class="checklist-container">
    <ul class="checklist">
        <li class="checklist-item"><span class="checklist-icon"><i class="project-icon far fa-circle"></i></span>Morango <span class="delete-checklist-icon"><i class="far fa-minus-square fa-sm"></i></span></li>
        <li class="checklist-item"><span class="checklist-icon"><i class="project-icon far fa-circle"></i></span>Banana <span class="delete-checklist-icon"><i class="far fa-minus-square fa-sm"></i></span></li>
        <li class="checklist-item"><span class="checklist-icon"><i class="project-icon far fa-circle"></i></span>Macarrão <span class="delete-checklist-icon"><i class="far fa-minus-square fa-sm"></i></span></li>
    </ul>
</div> */}