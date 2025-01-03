function myFunc() {
  console.log("hello world");
  console.log(this);
}
myFunc();
console.log(window); // so in the window object i got myFunc
// so i can also
window.myFunc(); //so it will give the same output
//so if i console.log(this) inside myfunc it will give window object
