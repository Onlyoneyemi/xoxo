const todos = [{
    text: "Order cat food",
    completed: true
}, {
    text: "Clean kitchen",
    completed: false
}, {
    text: "Buy food",
    completed: true
}, {
    text: "Do work",
    completed: false
}, {
    text: "Exercise",
    completed: true
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsTodo = function (todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

// deleteTodo(todos, "Do work")
// console.log(todos)

// console.log(getThingsTodo(todos))

sortTodos(todos)
console.log(todos)