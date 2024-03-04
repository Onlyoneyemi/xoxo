// let firstName = "Opeyemi"
// let lastName = "Bello"
// let fullName = firstName + " " + lastName

// console.log(fullName)

let city = "Akure"
let country = "Nigeria"
let location = `${city}, ${country}.`

console.log(location)

//Initial Method
// const http = require("http")
// const server = http.createServer()

// //Listening handler
// server.on("connection", (socket) => {
//     console.log("New connection....")
// })

// //Listening on port 3000
// server.listen(3000)

// console.log("Listening on port 3000....")

//Alternate Method
const http = require("http")

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.write("Hello World.")
        response.end()
    }

    if (request.url === "/api/courses") {
        response.write(JSON.stringify([1, 2, 3]))
        response.end()
    }
})

server.listen(3000)

console.log("Listening on port 3000....")