//Fetch existing todo from local storage
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem("todos")
    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

//Save todos to local storage
const saveTodos = function (todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
}

//Render application based on filter
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {

        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector("#todos").innerHTML = ""
    
    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector("#todos").appendChild(summary)
    
    filteredTodos.forEach(function (todo) {
        const todoEl = generateTodoDOM(todo)
        document.querySelector("#todos").appendChild(todoEl)
    })
}

//Get the DOM elements for an individual todo
const generateTodoDOM = function (todo)  {
    const todoEl = document.createElement("div")
    const checkboxEl = document.createElement("input")
    const textEl = document.createElement("span")
    const buttonEl = document.createElement("button")

    //Setting up the checkbox
    checkboxEl.setAttribute("type", "checkbox")
    todoEl.appendChild(checkboxEl)

    //Setting up the individual todo text
    if (todo.text.length > 0) {
        textEl.textContent = todo.text
    } else {
        textEl.textContent = "Unnamed todo"
    }
    todoEl.appendChild(textEl)

    //Setting uo the delete button for each todo
    buttonEl.textContent = "x"
    todoEl.appendChild(buttonEl)

    return todoEl
}

//Generate the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement("h2")
    summary.textContent = `You have ${incompleteTodos.length} things left to do.`
    return summary
}