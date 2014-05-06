#Lesson 2 - Loops

![image](http://i.imgur.com/VxptVvS.jpg)

## Before class

### Objective

Students will be able to create ``while`` and ``for`` loops.

### Key points

* Loops let you do repeat the same operation over and over again.
* Typically, loops go over a list. This is useful when you want to do something with every element in a list.
* Usually, loops have an exit condition. That is, some criteria will be met that will end the running of the loop.
* A loop that does not terminate is called an infinite loop. As programmers, we seek to avoid these because they freeze our program.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../1-array/assessments/).
2. Write exit-ticket based off [assessments form current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Iterate
* Initialization 
* Increment / Decrement

### References

* http://www.w3schools.com/js/js_loop_while.asp
* http://www.w3schools.com/js/js_loop_for.asp

## During class

### Do-now

1. Attendance: http://scripted.org/attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about loops. This is important because loops are a tool that programmers can use to iterate through an array and process each element in it. It connects to what we've previously learned because we will be able to take advantage of what we know about arrays in creating loops.

Someone give me an example of a loop in real life. When we take the bus and pay with change, the machine keeps counting every coin we deposit until we run out. The machine also calculates the total amount of money after each coin has been counted to check if we have deposited enough to pay the fare. Once we have, the machine stops counting and we here a beep so that we know we can stop putting money in.

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
