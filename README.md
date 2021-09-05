# Javascript Important Concepts

This respository is created to take note some concepts in javascript with brief explainations and examples that I collected from books, other developers' blogs...

**Table of contents:**

1. [Prototype](#prototype) 


## Prototype

- Almost every object is linked to another object. That linked object is called Proptotype  (*null object doesn't have Prototype*)
- Object inherit properties and methods from it's prototype ancestry - it means if when an object gets a request for a property that it does not have, that property will be searched in prototype, then prototype's prototype and so on....(it's called prototype chain)
- A prototype is automatically assigned to any object.
- You can define a object prototype
<p align="right"><i>Steven Hancock - All things javascript</i></p>

```javascript
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
```