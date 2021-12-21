/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/reset.scss":
/*!************************!*\
  !*** ./src/reset.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list/./src/reset.scss?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list/./src/style.scss?");

/***/ }),

/***/ "./src/DOMHandler.js":
/*!***************************!*\
  !*** ./src/DOMHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoDiv\": () => (/* binding */ createTodoDiv),\n/* harmony export */   \"createTodoInputElement\": () => (/* binding */ createTodoInputElement),\n/* harmony export */   \"deleteTodoDiv\": () => (/* binding */ deleteTodoDiv),\n/* harmony export */   \"createProjectInputElement\": () => (/* binding */ createProjectInputElement),\n/* harmony export */   \"createProjectElement\": () => (/* binding */ createProjectElement),\n/* harmony export */   \"toggleAddToDoBtn\": () => (/* binding */ toggleAddToDoBtn),\n/* harmony export */   \"removeInputDiv\": () => (/* binding */ removeInputDiv),\n/* harmony export */   \"loadProject\": () => (/* binding */ loadProject)\n/* harmony export */ });\n\nfunction createTodoDiv(toDoObj, todoArray) {\n\n    const newTodoDiv = document.createElement('div');\n    newTodoDiv.classList.add('todo-inner-container');\n    newTodoDiv.innerHTML = `\n            <div class=\"todo-item-container\" data-id=\"${toDoObj.id}\">\n                <span class=\"todo-check-icon\"><i class=\"project-icon far fa-circle\"></i></span>\n                <span class=\"todo-title\">${toDoObj.title}</span>\n                <button class=\"delete-todo\"><i class=\"far fa-times-circle fa-2x\"></i></button>\n                <div class=\"todo-status\">\n                    <div class=\"priority-status\" data-priority=\"${toDoObj.priority}\"><i class=\"fas fa-circle\"></i></div>\n                    <div class=\"dueDate-status\"><span class=\"dueDate-text\">${toDoObj.dueDate}</span></div>\n                </div>\n            </div>\n    `;\n\n    const deleteTodoBtn = newTodoDiv.querySelector('button.delete-todo')\n    deleteTodoBtn.addEventListener('click', (e) => {\n        deleteTodoDiv.call(e.currentTarget)\n\n        for (let i = todoArray.length - 1; i >= 0; i-=1) {\n            if (todoArray[i].id === toDoObj.id) {\n              todoArray.splice(i, 1);\n            }\n          }\n\n    })\n\n    const checkBtn = newTodoDiv.querySelector('.todo-check-icon')\n    checkBtn.addEventListener('click', (e) => {\n        deleteTodoDiv.call(e.currentTarget)\n\n        for (let i = todoArray.length - 1; i >= 0; i-=1) {\n            if (todoArray[i].id === toDoObj.id) {\n              todoArray.splice(i, 1);\n            }\n          }\n\n    })\n\n    const todoContainer = document.querySelector('.todo-outer-container');\n    todoContainer.append(newTodoDiv);\n\n    return newTodoDiv\n}\n\nfunction createProjectElement(newProject) {\n\n    const newProjectElement = document.createElement('li');\n    newProjectElement.classList.add('project-item');\n    newProjectElement.setAttribute('data-project', newProject.id)\n    newProjectElement.innerHTML = `\n            <i data-project=\"${newProject.id}\" class=\"project-icon ${newProject.icon}\"></i>${newProject.title}\n    `;\n\n    const projectsContainer = document.querySelector('.project-list');\n    projectsContainer.append(newProjectElement);\n\n    return newProjectElement\n}\n\nfunction deleteTodoDiv() {\n    const todoID = this.parentElement.getAttribute('data-id')\n\n    if (this.closest('.todo-inner-container') === null) {\n        console.error(\"ERROR: Couldn't find todo element to delete. No todo-inner-container found.\");\n        return\n    }\n    this.closest('.todo-inner-container').remove();\n\n    if (document.querySelector('.add-todo-btn').style.display === 'none') toggleAddToDoBtn();\n\n    return todoID\n}\n\nfunction toggleAddToDoBtn() {\n    const addToDoBtn = document.querySelector('.add-todo-btn')\n    \n    if (addToDoBtn.style.display === 'none') {\n        addToDoBtn.style.display = 'block'\n    } else {\n        addToDoBtn.style.display = 'none'\n    }\n}\n\nfunction getCurrentDate() {\n    // https://stackoverflow.com/a/29774197\n\n    let currentDate = new Date();\n    const offset = currentDate.getTimezoneOffset()\n    currentDate = new Date(currentDate.getTime() - (offset*60*1000))\n    return currentDate.toISOString().split('T')[0]\n}\n\nfunction toggleActivePriorityBtn() {\n    const siblings = [...this.parentElement.children]\n    siblings.forEach(element => element.classList.remove('active'));\n    this.classList.toggle('active');\n}\n\nfunction toggleDueDateBtn() {\n    if (this.classList.contains('active')) return\n\n    const dueDateBtns = this.parentElement.querySelectorAll('button')\n    const dateInput = this.parentElement.querySelector(\"input[type='date']\")\n\n    dueDateBtns.forEach(btn => btn.classList.remove('active'))\n    this.classList.add('active')\n\n    dateInput.classList.toggle('active')\n}\n\nfunction createTodoInputElement() {\n    const todoInputElement = document.createElement('div');\n    todoInputElement.classList.add('todo-inner-container','input-todo-container');\n    const currentDate = getCurrentDate();\n\n    todoInputElement.innerHTML = `\n            <div class=\"todo-item-container\">\n                <span class=\"todo-check-icon\"><i class=\"project-icon far fa-circle\"></i></span>\n                <input type=\"text\" class=\"todo-title\"></span>\n                <button class=\"delete-todo\"><i class=\"far fa-times-circle fa-2x\"></i></button>\n            </div>\n            <div class=\"new-todo-config-container\">\n                <ul class=\"priority-input-list\">\n                    <span class=\"config-title\">Priority: </span>\n                    <li data-priority=\"2\" class=\"priority-input-item active\"><i class=\"fas fa-star\"></i></li>\n                    <li data-priority=\"1\" class=\"priority-input-item\"><i class=\"fas fa-star\"></i></li>\n                    <li data-priority=\"0\" class=\"priority-input-item\"><i class=\"fas fa-star\"></i></li>\n                </ul>\n                <div class=\"dueDate-config-container\">\n                    <label for=\"dueDate\" class=\"dueDate-label config-title\">Due date:</label>\n                    <button class=\"noDueDate-btn active\"><i class=\"far fa-calendar-times\"></i></button>\n                    <input type=\"date\" name=\"dueDate\" id=\"dueDate\" value=\"${currentDate}\">\n                    <button class=\"yesDueDate-btn\"><i class=\"far fa-calendar\"></i></button>\n                </div>\n                <button class=\"add-todo-config-btn\">Add</button>\n            </div>\n            \n    `;\n    \n    const dueDateBtns = todoInputElement.querySelectorAll('.dueDate-config-container button')\n    dueDateBtns.forEach(btn => btn.addEventListener('click', toggleDueDateBtn))\n\n    const priorityInputList = todoInputElement.querySelectorAll('.priority-input-item')\n    priorityInputList.forEach(btn => btn.addEventListener('click', toggleActivePriorityBtn))\n\n    const deleteTodoBtn = todoInputElement.querySelector('button.delete-todo')\n    deleteTodoBtn.addEventListener('click', deleteTodoDiv)\n\n    const todoContainer = document.querySelector('.todo-outer-container');\n    todoContainer.append(todoInputElement);\n\n    const todoTitleInput = todoInputElement.querySelector('.todo-title')\n    todoTitleInput.focus();\n\n    return todoInputElement;\n}\n\nfunction createProjectInputElement() {\n    const projectInputElement = document.createElement('li');\n    projectInputElement.classList.add('project-item', 'input-project-container');\n\n    projectInputElement.innerHTML = `\n                                        <i data-project=\"placeholder\" class=\"project-icon fas fa-adjust\"></i>\n                                        <input type=\"text\" name=\"projectTitle\" id=\"projectTitle\">\n    `;\n    \n    const projectsContainer = document.querySelector('.project-list');\n    projectsContainer.append(projectInputElement);\n\n    const projectTitleInput = projectInputElement.querySelector('#projectTitle')\n    projectTitleInput.focus();\n\n    return projectInputElement;\n}\n\nfunction clearScreen() {\n    document.querySelectorAll('.todo-inner-container').forEach((elem) => elem.remove());\n}\n\nfunction loadProject(projectID, todoArray, projectArray) {\n    clearScreen();\n\n    const projectTitle = document.querySelector('.project-title')\n    projectTitle.setAttribute(\"data-project\", projectID); \n    const projectObj = projectArray.find(element => (element.id === projectID))\n    projectTitle.innerHTML = `<i data-project=\"${projectObj.id}\" class=\"project-icon ${projectObj.icon}\"></i>${projectObj.title}`\n\n    todoArray.forEach(todo => {\n        console.log(projectID)\n        if (todo.parentProjectID === projectID) {\n            createTodoDiv(todo, todoArray)\n        }\n    })\n\n    if (document.querySelector('.add-todo-btn').style.display === 'none') toggleAddToDoBtn();\n}\n\nfunction removeInputDiv() {\n    if (document.querySelector('.input-todo-container') !== null) {\n        const todoInputElement = document.querySelector('.input-todo-container')\n        todoInputElement.remove();\n        return\n    } \n    if (document.querySelector('.input-project-container') !== null) {\n        const projectInputElement = document.querySelector('.input-project-container')\n        projectInputElement.remove();\n        return\n    }\n}\n\n\n\n{/* <div class=\"checklist-container\">\n    <ul class=\"checklist\">\n        <li class=\"checklist-item\"><span class=\"checklist-icon\"><i class=\"project-icon far fa-circle\"></i></span>Morango <span class=\"delete-checklist-icon\"><i class=\"far fa-minus-square fa-sm\"></i></span></li>\n        <li class=\"checklist-item\"><span class=\"checklist-icon\"><i class=\"project-icon far fa-circle\"></i></span>Banana <span class=\"delete-checklist-icon\"><i class=\"far fa-minus-square fa-sm\"></i></span></li>\n        <li class=\"checklist-item\"><span class=\"checklist-icon\"><i class=\"project-icon far fa-circle\"></i></span>Macarrão <span class=\"delete-checklist-icon\"><i class=\"far fa-minus-square fa-sm\"></i></span></li>\n    </ul>\n</div> */}\n\n//# sourceURL=webpack://todo-list/./src/DOMHandler.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.scss */ \"./src/reset.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMHandler.js */ \"./src/DOMHandler.js\");\n\n\n\n\nlet todoList = []\nlet completedTodoList = []\nlet projectList = []\n\nclass TodoItem {\n\n    // priority goes from 0 to 2, higher to lower priority\n    constructor(title, description, dueDate, priority, parentProjectID) {\n        this.id = todoList.length;\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.parentProjectID = parentProjectID;\n        this.completedStatus = false\n    }\n\n}\n\nclass Project {\n    \n    constructor(title, icon, color) {\n        this.id = projectList.length;\n        this.listOrder = projectList.length;\n        this.title = title;\n        this.icon = icon;\n        this.color = color;\n    }\n\n}\n\nfunction loadEventListeners() {\n    const addTodoBtn = document.querySelector('button.add-todo-btn');\n    addTodoBtn.addEventListener('click', getTodoInput);\n\n    const addProjectBtn = document.querySelector('button.new-project-btn')\n    addProjectBtn.addEventListener('click', getProjectInput)\n\n    const projectBtns = document.querySelectorAll('li.project-item')\n    projectBtns.forEach(btn => btn.addEventListener('click', () => _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.loadProject(parseInt(btn.getAttribute('data-project')), todoList, projectList)))\n}\n\nfunction getTodoInput() {\n    if (document.querySelector('input.todo-title') !== null) return\n\n    const genericAddBtn = this\n    _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.toggleAddToDoBtn();\n\n    const todoInputElement = _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.createTodoInputElement();\n    todoInputElement.addEventListener('keypress', function (e) {\n        if (e.key === 'Enter') {\n            const todoInfo = getInputInfo(todoInputElement)\n            addToDo(todoInfo);\n            _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.toggleAddToDoBtn();\n        }\n    });\n    \n    const todoAddBtn = todoInputElement.querySelector('button.add-todo-config-btn');\n    todoAddBtn.addEventListener('click', () => {\n        const todoInfo = getInputInfo(todoInputElement)\n        addToDo(todoInfo);\n        _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.toggleAddToDoBtn();\n    })\n\n}\n\nfunction getProjectInput() {\n    if (document.querySelector('input#projectTitle') !== null) return\n\n    const genericAddBtn = this\n    genericAddBtn.style.display = 'none'\n\n    const projectInputElement = _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.createProjectInputElement();\n    projectInputElement.addEventListener('keypress', function (e) {\n        if (e.key === 'Enter') {\n            const projectInfo = getInputInfo(projectInputElement)\n            addProject(projectInfo);\n            genericAddBtn.style.display = 'block'\n        }\n    });\n\n}\n\nfunction getInputInfo(DOMElement) {\n    if (DOMElement.classList.contains('todo-inner-container')) {\n        const title = DOMElement.querySelector('.todo-title').value\n    \n        const todoDueDateInput = DOMElement.querySelector('input#dueDate')\n        let dueDate = ''\n    \n        if (todoDueDateInput.classList.contains('active')) {\n            dueDate = todoDueDateInput.value\n        }\n    \n        const todoPriorityInput = DOMElement.querySelector('.priority-input-item.active')\n        const priorityValue = todoPriorityInput.getAttribute('data-priority')\n\n        const projectHeading = document.querySelector('h1.project-title')\n        const parentProjectID = parseInt(projectHeading.getAttribute('data-project'))\n\n        return {title, dueDate, priorityValue, parentProjectID}\n\n    } else if (DOMElement.classList.contains('input-project-container')) {\n        const title = DOMElement.querySelector('#projectTitle').value\n        const icon = 'fas fa-adjust'\n        const color = 'green'\n\n        return {title, icon, color}\n    }\n}\n\nfunction addToDo(todoInfo) {\n    let toDo = new TodoItem(todoInfo.title, null, todoInfo.dueDate, todoInfo.priorityValue, todoInfo.parentProjectID)\n    todoList.push(toDo)\n\n    _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.createTodoDiv(toDo, todoList);\n    console.log(toDo);\n\n    _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.removeInputDiv();\n}\n\nfunction addProject(projectInfo) {\n    let newProject = new Project(projectInfo.title, projectInfo.icon, projectInfo.color)\n    projectList.push(newProject)\n\n    const newProjectElement = _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.createProjectElement(newProject);\n    newProjectElement.addEventListener('click', () => _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.loadProject(newProject.id, todoList, projectList))\n\n    _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.removeInputDiv();\n\n    _DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.loadProject(newProject.id, todoList, projectList)\n    console.log(newProject);\n}\n\n\naddProject({title: 'Entry', icon: 'fas fa-inbox', color: 'green'})\naddProject({title: 'Test', icon: 'fas fa-adjust', color: 'green'})\n\naddToDo({title: 'teste1', dueDate: '2021-11-25', priorityValue: '1', parentProjectID: 0});\naddToDo({title: 'teste2', dueDate: '', priorityValue: '2', parentProjectID: 0});\naddToDo({title: 'teste3', dueDate: '', priorityValue: '1', parentProjectID: 0});\naddToDo({title: 'teste4', dueDate: '', priorityValue: '1', parentProjectID: 1});\n\n_DOMHandler_js__WEBPACK_IMPORTED_MODULE_2__.loadProject(0, todoList, projectList)\n\nloadEventListeners();\n\n//# sourceURL=webpack://todo-list/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;