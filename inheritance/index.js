//To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from another class:

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isCute() {
    return this.age <= 1;
  }
}

class Cat extends Animal {}

const billy = new Cat("billy", 1);
console.log(billy)
console.log(billy.isCute())
