import './reset.scss'
import './style.scss'
import * as DOMHandler from './DOMHandler.js'

let todoList = []
let projectList = []

class TodoItem {

    // priority goes from 0 to 2, higher to lower priority
    constructor(title, description, dueDate, priority, parentProject) {
        this.id = todoList.length;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.parentProject = parentProject;
    }

}

class Project {
    
    constructor(title, icon, color) {
        this.id = projectList.length;
        this.listOrder = projectList.length;
        this.title = title;
        this.icon = icon;
        this.color = color;
    }

}

function loadEventListeners() {
    const addTodoBtn = document.querySelector('button.add-todo-btn');
    addTodoBtn.addEventListener('click', getTodoInput);

    const addProjectBtn = document.querySelector('button.new-project-btn')
    addProjectBtn.addEventListener('click', getProjectInput)
}

function getTodoInput() {

    const todoInputElement = DOMHandler.createTodoInputElement();
    todoInputElement.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addToDo(todoInputElement);
        }
    });

    const todoAddBtn = todoInputElement.querySelector('button.add-todo-config-btn')
    todoAddBtn.addEventListener('click', () => {
        addToDo(todoInputElement)
    })

}

function getProjectInput() {

    const projectInputElement = DOMHandler.createProjectInputElement();
    projectInputElement.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addProject(projectInputElement);
        }
    });

}

function addToDo(todoInputElement) {
    const title = todoInputElement.querySelector('.todo-title').value

    const todoDueDateInput = todoInputElement.querySelector('input#dueDate')
    let dueDate = null

    if (todoDueDateInput.classList.contains('active')) {
        dueDate = todoDueDateInput.value
    }

    const todoPriorityInput = todoInputElement.querySelector('.priority-input-item.active')
    const priorityValue = todoPriorityInput.getAttribute('data-priority')

    let toDo = new TodoItem(title, null, dueDate, priorityValue)
    todoList.push(toDo)

    DOMHandler.createTodoDiv(toDo);
    todoInputElement.closest('.todo-inner-container').remove();
    console.log(toDo);
}

function addProject(projectInputElement) {
    const title = projectInputElement.querySelector('#projectTitle').value
    const icon = 'fas fa-adjust'
    const color = 'green'

    let newProject = new Project(title, icon, color)
    projectList.push(newProject)

    DOMHandler.createProjectElement(newProject);
    projectInputElement.closest('.project-item').remove();
    console.log(newProject);
}

loadEventListeners();

DOMHandler.createTodoDiv({title: 'teste'})