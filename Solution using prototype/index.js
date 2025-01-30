//We will store methods in different object so we can use referance
// const userMethods = {
//   about: function () {
//     return `My name is ${this.firstName} I am ${this.age} `;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

//Now we know the concept of prototype that it provides free space for function objects so we dont need to add external object we can use prototype
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
console.log(createUser.prototype)
//add properties
//about
createUser.prototype.about = function(){
    return `My name is ${this.firstName} I am ${this.age} `;
}
//is18
createUser.prototype.is18 = function(){
    return this.age >= 18;
}
createUser.prototype.sing = function(){
    return "lalalala"
}
const user1 = createUser("Anuja", "nemishte", "anuja@gmail.com", 18, "Sangli");
console.log(user1);
const userInfo = user1.about();
console.log(userInfo);
console.log(user1.is18());
console.log(user1.sing())
