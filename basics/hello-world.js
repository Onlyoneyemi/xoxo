// console.log("Hello Opeyemi")

// console.log(module)


const EventEmitter = require("events")

class Logger extends EventEmitter {
    log (message) {
        console.log(message)

        //Raise an event
        this.emit("messagelogged", {id: 1, url: "http://"})
    }
}

module.exports = Logger