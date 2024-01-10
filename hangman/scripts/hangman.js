class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split("")
        this.remainingGuesses  = remainingGuesses
        this.guessedLetters = []
        this.status = "Playing"
    }
    getStatus() {
         //Using every
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === " ")
        // let finished = true

        // this.word.forEach((letter) => {
        //     if (this.guessedLetters.includes(letter)) {
        //     } else {
        //         finished = false
        //     }
        // })

        if (finished) {
            this.status = "Finished"
        } else if (finished === false && this.remainingGuesses <= 0) {
            this.status = "Failed"
        } else {
            this.status = "Playing"
        }

        return this.status
    }
    get statusMessage () {
        if (this.status === "Playing") {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === "Failed") {
            return `Nice try! the word is "${this.word.join("")}"`
        } else {
            return "Great work! You guessed the word."
        }
    }
    get puzzle () {
        let puzzle = ""

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {
                return puzzle = puzzle + letter
            } else {
                return puzzle = puzzle + "*"
            }
        })

        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUniqueGuess = !this.guessedLetters.includes(guess)
        const isBadguess = !this.word.includes(guess)

        if (this.status !== "Playing") {
            return  
        }

        if (isUniqueGuess) {
            this.guessedLetters.push(guess)
        }
        if (isUniqueGuess && isBadguess) {
            this.remainingGuesses = this.remainingGuesses - 1
        }

        this.getStatus()
    }

}