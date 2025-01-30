function createUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
//add properties
//about
createUser.prototype.about = function () {
  return `My name is ${this.firstName} I am ${this.age} `;
};
//is18
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "lalalala";
};
const user1 = new createUser(
  "Anuja",
  "nemishte",
  "anuja@gmail.com",
  18,
  "Sangli"
);
console.log(user1);
const userInfo = user1.about();
console.log(userInfo);
console.log(user1.is18());
console.log(user1.sing());
