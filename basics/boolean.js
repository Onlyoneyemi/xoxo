// === - Equality symbol
// !== - Not equal symbol
// < - Less than symbol
// > - Greater than symbol
// <= - Less than and equal to
// >= Greater than and equal to

// let temp = 132

// if (temp <= 32) {
//     console.log("It is freezing outside.")
// }

// if (temp >= 110) {
//     console.log("It is way too hot outside.")
// }


//Challenge Area
// let age = 7
//  if (age <= 7) {
//     console.log("You will get the minor citizen discount.")
//  }

//  if (age >= 65) {
//     console.log("You will get the  senior citizen discount.")
//  }


const EventEmitter = require("events")

const Logger = require("./hello-world")
const logger = new Logger()

logger.on("messagelogged", (e) => {
   console.log("listener was called", e)
})

logger.log("Message was logged")