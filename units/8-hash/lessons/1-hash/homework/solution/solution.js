console.log("**********START OF EXERCISE 1**********");

var favoriteFoods = {"vegetable": "broccoli", "fruit": "mango", "drink": "water"};

console.log("**********END OF EXERCISE 1**********");


console.log("**********START OF EXERCISE 2**********");

console.log(favoriteFoods["vegetable"]);
console.log(favoriteFoods["fruit"]);
console.log(favoriteFoods["drink"]);

console.log("**********END OF EXERCISE 2**********");


console.log("**********START OF EXERCISE 3**********");

favoriteFoods["candy"] = "Starburst";
console.log(favoriteFoods["candy"]);

console.log("**********END OF EXERCISE 3**********");


console.log("**********START OF EXERCISE 4**********");

favoriteFoods["fruit"] = [favoriteFoods["fruit"], "strawberry"];

console.log(favoriteFoods["fruit"][0]);
console.log(favoriteFoods["fruit"][1]);

console.log("**********END OF EXERCISE 4**********");


console.log("**********START OF EXERCISE 5**********");

delete favoriteFoods["drink"];

console.log("**********END OF EXERCISE 5**********");


console.log("**********START OF EXERCISE 6**********");

for (key in favoriteFoods)
{
  console.log(key);
  
  if (key == "fruit")
  {
    for (var i=0; i<favoriteFoods[key].length; ++i)
    {
      console.log("\t" + favoriteFoods[key][i]);
    }
  }
  
  else
  {
    console.log(favoriteFoods[key]);
  }
}

console.log("**********END OF EXERCISE 6**********");
