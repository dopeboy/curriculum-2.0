#Lesson 1 - Conditionals

![image](http://i.imgur.com/ZRo5Z6j.jpg)

## Before class

### Objective

Students will be able to use booleans, conditionals, and logical operators.

### Key points

* Boolean values are either true or false.
* `if`/`else` statements let us set a condition and execute different code based on whether the condition is met.
* Logical operators let us test for complex conditions.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../6-string-manipulation/lessons/1-xxx/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Boolean
* Condition
* Logical operator

### References

* http://www.w3schools.com/js/js_obj_boolean.asp
* http://www.w3schools.com/js/js_if_else.asp
* http://www.w3ctutorial.com/js-basic/js-comparisons

## During class

### Do-now

1. Attendance: http://scripted.org/attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about boolean values, `if`/`else` statements, and logical operators. This is important because these concepts will allow us to write sophiscated programs that will run in different ways based upon what we input. It connects to what we've previously learned because we will be able test the values of variables we've created in the past and derive a boolean value.

Someone give me an example of a use of if/else logic in the real world. If there is milk left in the carton, then you will drink milk. Or else, you will need to go to the store to get milk. If you take a shower, then you will smell good. Or else, you will smell bad.

Let's talk about an example involving a machine.How does a metro station work? If the remaining amount of money on your metro card is less than the fare, then you will see "INSUFFICIENT FARE" printed on the display and the turnstile will stay locked. Or else, the machine will subtract the fare amount from your balance, display it, and unlock the turnstile.

### Introduction of new material ("I do")

####Create and initialize an array

```
var fruits=["banana", "watermelon", "apple"];
```

####Access and print an element of an array

```
console.log(fruits[0]);
```

This prints out `banana`. Here, `0` is the index. Wait. If we're accessing the first element of an array, why is our index `1` and not `0`? This is because computers start counting at 0, not 1. 

What if we wanted to access and print the second element of our array?

```
console.log(fruits[1]);
``` 

This prints out `watermelon`. 

And how about the third and last element of our array?

```
console.log(console.log(fruits[2]);
```

This prints out `apple`. 


####Change an element of an array

Let's change the first element of our array and then print it.

```
fruits[0] = "mango"
console.log(fruits[0])
```

This prints out `mango`.

####Find and print the size of an array

Let's talk about the size of an array. How big is our array? Let's use JavaScript to find out:

``console.log(fruits.length);``

Tjis prints out `3`. What's the index of the last element in our array? How is connected to the length of it? What can we always conclude about the two?

####Add to the beginning of an array

What if we want to add another fruit to the beginning of our array of fruits? We could do:

```
fruits.unshift("strawberry");
console.log("fruits[0]");
console.log(fruits.length);
```

This prints out `strawberry` and `4`. The `unshift()` function acts *on* an array. Here, it takes in one parameter and then adds it to the beginning of the array.

####Add to the end of an array

What if we want to add another fruit to the end of our array of fruits? We could do:

```
fruits.push("kiwi");
console.log("fruits[3]");
console.log(fruits.length);
```

This prints out `kiwi` and `4`. The `push()` function acts *on* an array. Here, it takes in one parameter and then adds it to the end of the array.

####Remove from the beginning of an array

What if we want to remove the first fruit from our array? We could do:

```
var fruit = fruits.shift();
console.log(fruit);
console.log(fruits.length);
```

This prints out `banana` and `2`. The `shift()` function acts *on* an array. It removes *and* returns the first element in an array.

####Remove from the end of an array

What if we want to remove the last fruit from our array? We could do:

```
var fruit = fruits.pop();
console.log(fruit);
console.log(fruits.length);
```

This prints out `apple` and `2`. The `pop()` function acts *on* an array. It removes *and* returns the last element in an array.

####Select part of an array

What if we want to just get the second and third fruits from our array? We could:

```
var last_two = fruits.slice(1, 3);
console.log(last_two);
console.log(fruits.length);
```

This prints out `["watermelon","apple"]` and `3`. The `slice()` function acts *on* an array. It takes two parameters--the starting and ending index--and returns all of the elements on the first index and between the two indicies. Note that it leaves the original array untouched which is why the size of the `fruits` array remains 3.

####Concatenate two arrays together
What if we want to concatenate (or join) two separate arrays together into one big array? We could:

```
var more_fruits = ["blackberry", "grape", "pineapple"];
var all_fruits = fruits.concat(more_fruits);
console.log(all_fruits);
console.log(fruits.length);
console.log(more_fruits.length);
```

This prints out `["banana", "watermelon", "apple", "blackberry", "grape", "pineapple"]`, `3`, `3`. The `concat()` function acts *on* an array. Here, it takes one parameter, another array, and appends it to the end of the first array. Note that it leaves both original arrays untouched which is why the size of the `fruits` and `more_fruits` arrays remain 3.

####Join all elements into a string
What if we want to print every element in an array concatenated together as a string? We could:

```
console.log(fruits.join());
```

This prints out `banana, watermelon, apple`. The `join()` function acts *on* an array and prints each element with a comma.


### Guided practice ("We do")

Now we're going to work with arrays together. 

``var vegetables=["broccoli", "kale", "tomato"]``

1. How do I print out the second vegetable?
2. How do I change the first vegetable?
3. How do I find the length of our array?
4. How do I find the last vegetable in our array?
5. How do I find the last vegetable in any array?
6. How do I add one vegetable to the beginning of our array?
7. How do I add one vegetable to the end of our array?
7. How do I remove one vegetable from the beginning of our array?
8. How do I remove one vegetable from the end of our array?
9. How do I select the first two vegetabkes from our array?
10. Let's make another vegetables array. How do I concatenate it to our original array?
11. How do I print each vegetable in our array without having to access each one individually?


### Independent practice ("You do")

Write an array containing your five favorite songs.

1. Print out the third song.
2. Change the first song.
3. Find the length of your array.
4. Find the last song in your array.
5. Add one song to the beginning of your array.
6. Add one song to the end of your array.
7. Remove one song from the beginning of your array.
8. Remove one song from the end of your array.
9. Select the first two songs from your array.
10. Make another songs array. Concatenate it to  your original array.
11. Print each song in your array without having to access each one individually.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about arrays. This is important because arrays are used to represent lists. We can store multiple variables in one array. Next, we will learn about loops.

#### Homework

[Link to homework](homework/)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
