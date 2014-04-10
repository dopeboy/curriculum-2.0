#Lesson 1 - Arrays

![image](http://i.imgur.com/64dLS3B.jpg)

## Before class

### Objective

Students will be able to create, initialize, access, and manipulate arrays.

### Key points

* Lists in real life are arrays in the programming world.
* Arrays are made up of elements. These are like buckets that store something.
* Each element in an array has an index. We access elements by using these indicies.
* Arrays have a size.
* Computers start counting at 0.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../7-conditionals/lessons/1-conditionals/assessments/).
2. Write exit-ticket based off [assessments form current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Element
* Index
* Length
* Access
* Datastructure

### References

* http://www.w3schools.com/jsref/jsref_obj_array.asp

## During class

### Do-now

1. Attendance: http://scripted.org/attendance.
2. Do-now quiz

### Opening

Today we will learn about arrays. This is important because arrays are a tool that programmers can use to store and change a large set of data. It connects to what we've previously learned because we will be able to access and manipulate variables that are stored in an array.

Someone give me an example of a list in real life. A grocery list contains items that I need to buy when I go shopping. A parking lot contains a list of cars that are parked. Have we seen lists before? A string is actually a list too! It's a list of characters strung together.

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

####Add to an array

What if we wanted to add another fruit to our array of fruits? We could do:

```
fruits.push("kiwi");
console.log("fruits[3]");
console.log(fruits.length);
```

This prints out `kiwi` and `4`. The `push()` function acts *on* an array. It takes in one parameter and then adds it to the end of the array.


### Guided practice ("We do")

Now we're going to work with arrays together. 

``var vegetables=["broccoli", "kale", "tomato"]``

* How do I print out the second vegetable?
* How do I change the first vegetable?
* How do I find the length of our array?
* How do I find the last vegetable in our array?
* How do I find the last vegetable in any array?
* How do I add one vegetable to our array?

### Independent practice ("You do")

Write a list of your five favorite songs. Then do everything we did with vegetables for your array of songs.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about arrays. This is important because arrays can be used to represent lists. We can store multiple variables in one array. Arrays are another tool in our programmer's toolbox. We can use arrays to solve interesting problems.

#### Homework

[Link to homework](homework/)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
