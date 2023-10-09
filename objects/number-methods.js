// let num = 103.941

// console.log(num.toFixed(2))

// let min = 10
// let max = 20
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// console.log(randomNum)

//Challenge Area
let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return randomNum === guess
}

console.log(makeGuess(1))