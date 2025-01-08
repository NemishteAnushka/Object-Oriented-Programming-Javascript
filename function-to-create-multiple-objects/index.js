// const user = {
//   firstName: "Anushka",
//   lastName: "Nemishte",
//   email: "anushka@gmail.com",
//   age: 23,
//   address: "Sangli",
//   about() {
//     return `My name is ${this.firstName} I am ${this.age} year old`;
//   },
//   is18() {
//     return this.age >= 18;
//   },
// };

//this is 1 user object now we have to create multiple users with dyanmic info
//Function to create the multiple objects

function createUser(firstName, lastName, email, age, address) {
  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
    address: address,
    about() {
      return `My name is ${this.firstName} I am ${this.age} `;
    },
    is18() {
      return this.age >= 18;
    },
  };
}

const user1 = createUser("Anuja", "nemishte", "anuja@gmail.com", 18, "Sangli");
console.log(user1);
const userInfo = user1.about();
console.log(userInfo);
console.log(user1.is18());
