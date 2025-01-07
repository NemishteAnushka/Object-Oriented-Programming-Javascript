function hello() {
  console.log("hello");
}
hello.call(); // we can also call function like this gives same

//now lets create 2 users objects

const user1 = {
  firstName: "Anushka",
  age: 23,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

//now if i call user.about it will give output

// user1.about();  //output : Anushka 23

//but what if i want to set firstName and age from user 2 ?

//we can use call()
const user2 = {
  firstName: "Anuja",
  age: 18,
};

//syntax
user1.about.call(user2);

//so when we as a argument pass the object (this) which we can to call we can get output 

