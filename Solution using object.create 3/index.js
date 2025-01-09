//We will store methods in different object so we can use referance
const userMethods = {
  about: function () {
    return `My name is ${this.firstName} I am ${this.age} `;
  },
  is18: function () {
    return this.age >= 18;
  },
};
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

const user1 = createUser("Anuja", "nemishte", "anuja@gmail.com", 18, "Sangli");
console.log(user1);
const userInfo = user1.about();
console.log(userInfo);
console.log(user1.is18());
