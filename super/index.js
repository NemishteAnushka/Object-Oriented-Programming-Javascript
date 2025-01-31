//Create a class named "Model" which will inherit the methods from the "Car" class:
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

class Horse extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  run() {
    return `${this.name} can run upto ${this.speed} kmph`;
  }
}

const horse = new Horse("Horse", 11, 45);
console.log(horse);
