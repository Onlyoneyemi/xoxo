// let myBook = {
//     title: "1984",
//     author: "George Orwell",
//     pageCount: 326
// }

// let otherBook = {
//     title: "A peoples history",
//     author: "Howard Zinn",
//     pageCount: 723
// }

// let getSummary = function (book) {
//     return {
//         summary: `${book.title} by ${book.author}.`,
//         pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
//     }

// }

// let bookSummary = getSummary(myBook)
// let otherBookSummary = getSummary(otherBook)

// console.log(bookSummary.pageCountSummary)

//Challenge Area
let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsuis: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit - 32) * (5 / 9) + 273.15
    }
}

let result = convertFahrenheit(74)
console.log(result.fahrenheit)
console.log(result.celsuis)
console.log(result.kelvin)