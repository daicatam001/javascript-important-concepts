function Person(name) {
    this.name = name
}

Person.prototype.age = 1
Person.prototype.run = true
Person.prototype.show = function () {
    console.log(`I'm ${this.name} and I'm ${this.age} years old`)
}
const bob = new Person('bob')
bob.show() // I'm bob and I'm 1 years old
bob.age = 23
bob.show() // I'm bob and I'm 23 years old
console.log(bob.hasOwnProperty('run')) // false

