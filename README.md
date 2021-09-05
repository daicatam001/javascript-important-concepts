# Javascript Important Concepts

This respository is created to take note some concepts in javascript with brief explainations and examples that I collected from books, other developers' blogs...

**Table of contents:**

1. [Prototyoe](#prototype) 


## Prototype
____

- Almost every object is linked to another object. That linked object is called Proptotype  (*null object doesn't have Prototype*)
- Object inherit properties and methods from it's prototype ancestry - it means if when an object gets a request for a property that it does not have, that property will be searched in prototype, then prototype's prototype and so on....(it's called prototype chain)
- A prototype is automatically assigned to any object.
- You can define a object prototype

<div style="text-align:right"><i>Steven Hancock - All things javascript*</i></div>