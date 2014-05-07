// 2
var groceries = ["cereal", "bread", "eggs"];

// 3
console.log(groceries.length);

// 4
console.log(groceries.join());

// 5
groceries.unshift("chicken");
groceries.unshift("salt");
groceries.unshift("ice-cream");


// 6
groceries.push("beef");
groceries.push("rice");
groceries.push("sugar");

// 7
console.log(groceries.length);

// 8
console.log(groceries.join());

// 9
console.log(groceries.shift());
console.log(groceries.pop());

// 10
console.log(groceries.length);

// 11
console.log(groceries.join());

// 12
console.log(groceries.slice(0,2).join());

// 13
var parents_groceries = ["flour", "cream"];
var final_groceries = groceries.concat(parents_groceries);

// 14
console.log(final_groceries.length);

// 15
console.log(final_groceries.join());




