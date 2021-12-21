import './reset.scss'
import './style.scss'
import * as DOMHandler from './DOMHandler.js'

let todoList = []
let completedTodoList = []
let projectList = []

class TodoItem {

    // priority goes from 0 to 2, higher to lower priority
    constructor(title, description, dueDate, priority, parentProjectID) {
        this.id = todoList.length;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.parentProjectID = parentProjectID;
        this.completedStatus = false
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

    const projectBtns = document.querySelectorAll('li.project-item')
    projectBtns.forEach(btn => btn.addEventListener('click', () => DOMHandler.loadProject(parseInt(btn.getAttribute('data-project')), todoList, projectList)))
}

function getTodoInput() {
    if (document.querySelector('input.todo-title') !== null) return

    const genericAddBtn = this
    DOMHandler.toggleAddToDoBtn();

    const todoInputElement = DOMHandler.createTodoInputElement();
    todoInputElement.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const todoInfo = getInputInfo(todoInputElement)
            addToDo(todoInfo);
            DOMHandler.toggleAddToDoBtn();
        }
    });
    
    const todoAddBtn = todoInputElement.querySelector('button.add-todo-config-btn');
    todoAddBtn.addEventListener('click', () => {
        const todoInfo = getInputInfo(todoInputElement)
        addToDo(todoInfo);
        DOMHandler.toggleAddToDoBtn();
    })

}

function getProjectInput() {
    if (document.querySelector('input#projectTitle') !== null) return

    const genericAddBtn = this
    genericAddBtn.style.display = 'none'

    const projectInputElement = DOMHandler.createProjectInputElement();
    projectInputElement.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const projectInfo = getInputInfo(projectInputElement)
            addProject(projectInfo);
            genericAddBtn.style.display = 'block'
        }
    });

}

function getInputInfo(DOMElement) {
    if (DOMElement.classList.contains('todo-inner-container')) {
        const title = DOMElement.querySelector('.todo-title').value
    
        const todoDueDateInput = DOMElement.querySelector('input#dueDate')
        let dueDate = ''
    
        if (todoDueDateInput.classList.contains('active')) {
            dueDate = todoDueDateInput.value
        }
    
        const todoPriorityInput = DOMElement.querySelector('.priority-input-item.active')
        const priorityValue = todoPriorityInput.getAttribute('data-priority')

        const projectHeading = document.querySelector('h1.project-title')
        const parentProjectID = parseInt(projectHeading.getAttribute('data-project'))

        return {title, dueDate, priorityValue, parentProjectID}

    } else if (DOMElement.classList.contains('input-project-container')) {
        const title = DOMElement.querySelector('#projectTitle').value
        const icon = 'fas fa-adjust'
        const color = 'green'

        return {title, icon, color}
    }
}

function addToDo(todoInfo) {
    let toDo = new TodoItem(todoInfo.title, null, todoInfo.dueDate, todoInfo.priorityValue, todoInfo.parentProjectID)
    todoList.push(toDo)

    DOMHandler.createTodoDiv(toDo, todoList);
    console.log(toDo);

    DOMHandler.removeInputDiv();
}

function addProject(projectInfo) {
    let newProject = new Project(projectInfo.title, projectInfo.icon, projectInfo.color)
    projectList.push(newProject)

    const newProjectElement = DOMHandler.createProjectElement(newProject);
    newProjectElement.addEventListener('click', () => DOMHandler.loadProject(newProject.id, todoList, projectList))

    DOMHandler.removeInputDiv();

    DOMHandler.loadProject(newProject.id, todoList, projectList)
    console.log(newProject);
}


addProject({title: 'Entry', icon: 'fas fa-inbox', color: 'green'})
addProject({title: 'Test', icon: 'fas fa-adjust', color: 'green'})

addToDo({title: 'teste1', dueDate: '2021-11-25', priorityValue: '1', parentProjectID: 0});
addToDo({title: 'teste2', dueDate: '', priorityValue: '2', parentProjectID: 0});
addToDo({title: 'teste3', dueDate: '', priorityValue: '1', parentProjectID: 0});
addToDo({title: 'teste4', dueDate: '', priorityValue: '1', parentProjectID: 1});

DOMHandler.loadProject(0, todoList, projectList)

loadEventListeners();