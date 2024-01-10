class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName  = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age} years old.`

        this.likes.forEach((like) => {
            bio = bio  + ` ${this.firstName}  likes ${like}.`
        })
    return bio
    }
    set fullName (fullName) {
        const names = fullName.split(" ")
        this.firstName = names[0]
        this.lastName = names[1] 
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes = [])
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        const yearsLeft = 65 - this.age
        return `${this.lastName} ${this.firstName} has ${yearsLeft} years left.`
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes = [], grade) {
        super(firstName, lastName, age, likes = [])
        this.grade = grade
    }
    getBio() {
        if (this.grade >= 70) {
            return `${this.lastName} ${this.firstName} is passing.`
        } else {
            return `${this.lastName} ${this.firstName} is failing.`
        }
    }
    updateGrade(num) {
        this.grade = this.grade + num
    }
}

const me = new Employee("Opeyemi", "Bello", 24, "Junior Developer",  76)
me.fullName = "Ayenimowa Sheyanu"
console.log(me.getBio())