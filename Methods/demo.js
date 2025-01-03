//In JavaScript, the this keyword inside an object literal does not automatically refer to the object itself when used to initialize a property.
//The this keyword works as expected inside methods because methods are functions associated with an object. When you call a method using the object, this refers to the object that called the method.
const person = {
  firstName: "Anuushaka",
  lastName: "Nemishte",
  age: 21,
  fullName: `${this.firstName}`,
};

console.log(person.fullName);
