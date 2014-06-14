console.log("**********START OF EXERCISE 1**********");

function celsiusToFahrenheit(var degreesInCelsius)
{
  return ((degreesInCelsius*9)/5)+32;
}

console.log("**********END OF EXERCISE 1**********");


console.log("**********START OF EXERCISE 2**********");

function fahrenheitToCelsius(var degreesInFahrenheight)
{
  return (degreesInFahrenheight-32) * (5/9);
}

console.log("**********END OF EXERCISE 2**********");


console.log("**********START OF EXERCISE 3**********");

function celsiusToKelvin(var degreesInCelsius)
{
  return degreesInCelsius + 273;
}

console.log("**********END OF EXERCISE 3**********");


console.log("**********START OF EXERCISE 4**********");

function askThenPrintAge()
{
  var age = prompt("How old are you?");
  console.log(age);
}

askThenPrintAge();

console.log("**********END OF EXERCISE 4**********");


console.log("**********START OF EXERCISE 5**********");

function equation(var a, var b, var c)
{
  return (5 * pow(a,2)) + (4*b) + c;
}

console.log("**********END OF EXERCISE 5**********");
