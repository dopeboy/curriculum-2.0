console.log("**********START OF EXERCISE 1**********");

var fullName = prompt("What is your full (first and last) name?");
console.log(fullName);

console.log("**********END OF EXERCISE 1**********");


console.log("**********START OF EXERCISE 2**********");

var space = fullName.indexOf(" ");
var firstName = fullName.slice(0,space);
var lastName = fullName.slice(space+1,fullName.length);
console.log(firstName);
console.log(lastName);

console.log("**********END OF EXERCISE 2**********");


console.log("**********START OF EXERCISE 3**********");

console.log(firstName.charAt(firstName.length-1));
console.log(lastName.charAt(0));

console.log("**********END OF EXERCISE 3**********");


console.log("**********START OF EXERCISE 4**********");

firstName = "Your name is ".concat(firstName);
console.log(firstName);

console.log("**********END OF EXERCISE 4**********");


console.log("**********START OF EXERCISE 5**********");

lastName = lastName.concat("!");
console.log(lastName);

console.log("**********END OF EXERCISE 5**********");


console.log("**********START OF EXERCISE 6**********");

var x = firstName + " " + lastName;
console.log(x);

console.log("**********END OF EXERCISE 6**********");


console.log("**********START OF EXERCISE 7**********");

var age = prompt("How old are you?");
console.log(age);

console.log("**********END OF EXERCISE 7**********");


console.log("**********START OF EXERCISE 8**********");

var y = "And you're " + parseInt(age) + " years old!";
var z = x + " " + y;
console.log(z);

console.log("**********END OF EXERCISE 8**********");

