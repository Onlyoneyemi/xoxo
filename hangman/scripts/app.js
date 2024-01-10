const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guess")
let game

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ""
    guessesEl.textContent = game.statusMessage

    game.puzzle.split("").forEach((letter) => {
        const letterEl = document.createElement("span")
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector("#reset").addEventListener("click", () => {
    startGame()
})

startGame()

// getPuzzle("2").then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) =>  {
//     console.log(error)
// })

// getLocation().then((data) => {
//     console.log(`I am currently in ${data.city}, ${data.region}, ${data.country}.`)
// }).catch((error) => {
//     console.log(error)
// })