const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === "number") {
            callback(undefined, num * 2)
        }else {
            callback("Number must be provided.")
        }
    }, 2000)
}

getDataCallback(2, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        getDataCallback(data, (error, data) => {
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
        })
    }
})

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === "number" ? resolve(num * 2) : reject("Number must be provided!")
    },2000)
})

getDataPromise(5).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data)
    }, (error) => {
        console.log(error)
    })
}, (error) => {
    console.log(error)
})


getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(`Promise Data: ${data}`)
}).catch((error) => {
    console.log(error)
})