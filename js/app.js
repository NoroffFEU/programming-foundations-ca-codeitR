var fristName = "Ramesh";
var age = 40;
var student = true;

console.log("Hello ", fristName);
console.log("You are", age, "years old");
console.log("Are you a student?", student);

document.getElementById("p1").innerHTML = "Hello " + fristName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Are you a student? " + student;

/* arthematic expression is combination of...
operands (variables, values, etc.)
operators (+, -, *, /, %)
that evaluates to a value.
ex. y= x+5;
*/

let newStudent = 20;
newStudent = newStudent + 1;

console.log(newStudent);

// username

let userName;
document.getElementById("myButton").onclick = function () {
  userName = document.getElementById("myText").value;
  console.log(userName);
  document.getElementById("myLable").innerHTML = "Hello " + userName;
};
