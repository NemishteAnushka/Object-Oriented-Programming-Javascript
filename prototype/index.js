//javascripts functions also works objects
//for example
function myFunc() {
  console.log("hello");
}
// console.log(myFunc.name); //this name property returns name of the function
//also you can add your own properties
//for eg
// myFunc.myName = "Anushka";
// console.log(myFunc.myName);
//functions provide some usefull properties such as call(),apply(),bind()
//Another useFull property is prototype

console.log(myFunc.prototype) //this provide us free space {} empty object

//only functions provide prototype

//so we can i add key value pair related to our functions
//eg

myFunc.prototype.myName = "Anushka"
console.log(myFunc.prototype) // myName:Anushka added in empty object

//lets add function
myFunc.prototype.func = function(){
  return("this is function inside prototype")
}
console.log(myFunc.prototype.func())
console.log(myFunc.prototype)