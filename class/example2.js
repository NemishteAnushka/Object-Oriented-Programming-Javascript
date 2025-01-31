class Animal {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
}

const animal1 = new Animal("dog", 1);
console.log(animal1.isSuperCute());
