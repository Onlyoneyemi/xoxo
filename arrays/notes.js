const notes = [{
    title: "My next trip",
    body: "I will like to visit Spain"
}, {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better"
}, {
    title: "Office modification",
    body: "Buy a new seat"
}]

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return index
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMaatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMaatch || isBodyMatch
    })
}

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

// console.log(findNotes(notes, "work"))

// const note = findNote(notes, "habbits to work on")
// console.log(note)

sortNotes(notes)
console.log(notes)