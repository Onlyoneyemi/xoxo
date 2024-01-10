const square = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: "Andrew",
    age: 27
}, {
    name: "Vikram",
    age: 31
}, {
    name: "Jess",
    age: 22
}]

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const findPerson = people.find((person) => person.age === 22)
console.log(findPerson.name)