// 1. String

var name = "Ramesh"
var lastName = "Ghimire"
var fullName = name + " " + lastName

console.log(fullName)

// 2. Number
var age = 20
var weight = 60.5

console.log(age + weight)

// 3. Boolean
var isMale = true
var isFemale = false

console.log(isMale)

// 4. Array
var fruits = ["Apple", "Banana", "Orange", "Mango"]

console.log(fruits[0])

// 5.  Arrow Function
var add = (a, b) => {
  return a + b
}

console.log(add(10, 20))

// 6. Object
var person = {
  name: "Ramesh",
  age: 20,
  address: "Kathmandu",
  isMale: true,
  isFemale: false,
  fullName: function () {
    return this.name + " " + this.age
  },
}

console.log(person.fullName())

// 7. If Else
var age = 20

if (age > 18) {
  console.log("You are adult")
} else {
  console.log("You are child")
}

// 8. For Loop
for (var i = 0; i < 10; i++) {
  console.log(i)
}

// 9. While Loop
var i = 0
while (i < 10) {
  console.log(i)
  i++
}

// 10. Do While Loop
var i = 0
do {
  console.log(i)
  i++
} while (i < 10)

// 11. Switch Case
var day = "Monday"

switch (day) {
  case "Sunday":
    console.log("Today is Sunday")
    break
  case "Monday":
    console.log("Today is Monday")
    break
  case "Tuesday":
    console.log("Today is Tuesday")
    break
  case "Wednesday":
    console.log("Today is Wednesday")
    break
  case "Thursday":
    console.log("Today is Thursday")
    break
  case "Friday":
    console.log("Today is Friday")
    break
  case "Saturday":
    console.log("Today is Saturday")
    break
  default:
    console.log("Invalid Day")
    break
}
/*
// 12. Function
function add(a, b) {
  return a + b
}

console.log(add(10, 20))

// 13. Class
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  fullName() {
    return this.name + " " + this.age
  }
}

var person = new Person("Ramesh", 20)
console.log(person.fullName())

// 14. Constructor

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.fullName = function () {
  return this.name + " " + this.age
}

var person = new Person("Ramesh", 20)
console.log(person.fullName())

// 15. Inheritance
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  fullName() {
    return this.name + " " + this.age
  }
}
class Student extends Person {
  constructor(name, age, roll) {
    super(name, age)
    this.roll = roll
  }
}
var student = new Student("Ramesh", 20, 1)
console.log(student.fullName())

// 16. Callback Function
function add(a, b, callback) {
  callback(a + b)
}
add(10, 20, function (sum) {
  console.log(sum)
})

// 17. Promise
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Hello World")
  }, 1000)
})
promise.then(function (data) {
  console.log(data)
})

// 18. Async Await
async function hello() {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hello World")
    }, 1000)
  })
  var data = await promise
  console.log(data)
}
hello()

// 19. Fetch API
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json))

// 20. DOM Manipulation
document.getElementById("demo").innerHTML = "Hello World"

// 21. Event Listener
document.getElementById("demo").addEventListener("click", function () {
  alert("Hello World")
})

// 22. Local Storage
localStorage.setItem("name", "Ramesh")
console.log(localStorage.getItem("name"))

// 23. Session Storage
sessionStorage.setItem("name", "Ramesh")
console.log(sessionStorage.getItem("name"))

// 24. Cookies
document.cookie = "name=Ramesh"
console.log(document.cookie)

// 25. Regular Expression
var str = "Hello World"
var regex = /World/g
console.log(str.match(regex))

// 26. Error Handling
try {
  console.log("Hello World")
} catch (error) {
  console.log(error)
} finally {
  console.log("Finally")
}

// 27. Spread Operator
var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]

var arr3 = [...arr1, ...arr2]
console.log(arr3)

// 28. Destructuring
var arr = [1, 2, 3]
var [a, b, c] = arr
console.log(a, b, c)

// 29. Rest Operator
function add(...args) {
  console.log(args)
}
add(1, 2, 3, 4, 5)

// 30. Map
var arr = [1, 2, 3, 4, 5]
var newArr = arr.map(function (value) {
  return value * 2
})
console.log(newArr)

// 31. Filter
var arr = [1, 2, 3, 4, 5]
var newArr = arr.filter(function (value) {
  return value > 2
})
console.log(newArr)

// 32. Reduce
var arr = [1, 2, 3, 4, 5]
var sum = arr.reduce(function (prev, curr) {
  return prev + curr
})
console.log(sum)

// 33. Find
var arr = [1, 2, 3, 4, 5]
var value = arr.find(function (value) {
  return value == 3
})
console.log(value)

// 34. Find Index
var arr = [1, 2, 3, 4, 5]
var index = arr.findIndex(function (value) {
  return value == 3
})
console.log(index)

// 35. Some
var arr = [1, 2, 3, 4, 5]
var value = arr.some(function (value) {
  return value == 3
})
console.log(value)

// 36. Every
var arr = [1, 2, 3, 4, 5]
var value = arr.every(function (value) {
  return value > 0
})
console.log(value)

// 37. Sort
var arr = [1, 2, 3, 4, 5]
arr.sort(function (a, b) {
  return a - b
})
console.log(arr)

// 38. Reverse

var arr = [1, 2, 3, 4, 5]
arr.reverse()
console.log(arr)

// 39. Concat

var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = arr1.concat(arr2)
console.log(arr3)

// 40. Slice

var arr = [1, 2, 3, 4, 5]
var newArr = arr.slice(1, 3)
console.log(newArr)

// 41. Splice

var arr = [1, 2, 3, 4, 5]
var newArr = arr.splice(1, 3)
console.log(newArr)

// 42. Push

var arr = [1, 2, 3, 4, 5]
arr.push(6)
console.log(arr)

// 43. Pop

var arr = [1, 2, 3, 4, 5]
arr.pop()
console.log(arr)

// 44. Shift

var arr = [1, 2, 3, 4, 5]
arr.shift()
console.log(arr)

// 45. Unshift

var arr = [1, 2, 3, 4, 5]
arr.unshift(0)
console.log(arr)
*/
