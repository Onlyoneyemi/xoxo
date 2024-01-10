"use strict"

//Fetch existing todo from local storage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem("todos")

    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (e) {
        return []
    }
}

//Save todos to local storage
const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

//Remove todo from list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//Toggle the completed value of a given todo
const toggleTodo = function (id) {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}


//Render application based on filter
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter((todo) => {

        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector("#todos").innerHTML = ""
    
    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector("#todos").appendChild(summary)
    
    filteredTodos.forEach((todo) => {
        const todoEl = generateTodoDOM(todo)
        document.querySelector("#todos").appendChild(todoEl)
    })
}

//Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement("div")
    const checkboxEl = document.createElement("input")
    const textEl = document.createElement("span")
    const buttonEl = document.createElement("button")

    //Setting up the checkbox
    checkboxEl.setAttribute("type", "checkbox")
    checkboxEl.checked = todo.completed
    todoEl.appendChild(checkboxEl)
    checkboxEl.addEventListener("change", () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    //Setting up the individual todo text
    if (todo.text.length < 1) {
        textEl.textContent = "Unnamed todo"
    } else {
        textEl.textContent = todo.text
    }
    todoEl.appendChild(textEl)

    //Setting uo the delete button for each todo
    buttonEl.textContent = "x"
    todoEl.appendChild(buttonEl)
    buttonEl.addEventListener("click", () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

//Generate the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement("h2")
    summary.textContent = `You have ${incompleteTodos.length} things left to do.`
    return summary
}