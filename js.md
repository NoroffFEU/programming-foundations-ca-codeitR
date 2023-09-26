# js related

- js hoisting
  allows you to call functions on top of functions

  doStuff();

  function doStuff(){
  console.log("hello);
  }

-js closure:
closure is function that has access to variable from its outer(enclosing) lexial scope, even after that outer funtion has finished executing. its powerfull and essential concept as it allows you to create function tht remeber their surrownding context. including variabel and other funtions.

<!--
const myNmae = "Kyle"

function printName(){
console.log(myName)
}
printName()-->

function outerFunction(outerVariable){
return function innerFunction(innerVariable){
console.log("Outer Variables:" + outerVriables)
console.log("Inner Variables:" + innerVriables)
}
}
const newFunction = outerFunction("outside")
newFunction()
