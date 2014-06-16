console.log("**********START OF EXERCISE 4**********");

function solveQuadraticEquation(a,b,c)
{
  var inside = Math.sqrt(Math.pow(b,2) - (4*a*c));
  var numeratorOne = (-1)*b + inside;
  var numeratorTwo = (-1)*b - inside;
  
  var answerOne = numeratorOne / (2*a);
  var answerTwo = numeratorTwo / (2*a);
  
  console.log(answerOne);
  console.log(answerTwo);
}

console.log("**********END OF EXERCISE 4**********");


console.log("**********START OF EXERCISE 5**********");

solveQuadraticEquation(1,3,-4);

console.log("**********END OF EXERCISE 5**********");


console.log("**********START OF EXERCISE 6**********");

solveQuadraticEquation(2,-4,-3)

console.log("**********END OF EXERCISE 6**********");

console.log("**********START OF EXERCISE 7**********");

solveQuadraticEquation(2,-3,0.5)

console.log("**********END OF EXERCISE 7**********");
