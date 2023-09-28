// let add = function (a, b, c) {
//     return a + b + c
// }

// let result = add(10, 1, 5)
// console.log(result)


// let getScoreText = function (name = "Anonymous", score = 0) {
//     return "Name:" + name + " - Score:" + score
// }

// let scoreText = getScoreText()
// console.log(scoreText)


//Challenge Area
let getTip = function (total, tipPercent = .2) {
    let result = total * tipPercent
    let percent = tipPercent * 100

    return `A ${percent}% tip on $${total} is $${result}.`
}

let tip = getTip(100)
console.log(tip)