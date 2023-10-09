//Read existing notes from local storage
const getSavedNotes = function () {
    const noteJSON = localStorage.getItem("notes")
    if (noteJSON) {
        return JSON.parse(noteJSON)
    }else {
        return []
    }
}

//Save notes to local storage
const saveNotes = function (notes) {
    localStorage.setItem("notes", JSON.stringify(notes))
}

//Generate the DOM structure for thhe note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement("div")
    const textEl = document.createElement("span")
    const buttonEl = document.createElement("button")

    buttonEl.textContent = "x"
    noteEl.appendChild(buttonEl)

    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = "Unnamed note"
    }
    noteEl.appendChild(textEl)

    return noteEl
}

//Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector("#notes").innerHTML = ""

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        
        document.querySelector("#notes").appendChild(noteEl)
    })
}