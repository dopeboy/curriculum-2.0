#Lesson 1 - Conditionals

![image](http://i.imgur.com/ZRo5Z6j.jpg)

## Before class

### Objective

Students will be able to use booleans, conditionals, and logical operators.

### Key points

* Boolean values are either true or false.
* `if`/`else` statements let us set a condition and execute different code based on whether the condition is met.
* Comparison operators let us test for equality or difference..
* Logical operators let us test for complex conditions.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../6-string-manipulation/lessons/1-xxx/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Boolean
* Condition
* Comparison operator
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

####Create, initialize, and change a boolean variable

```
var hungry = true;
var full = false;
```

This is an example of two boolean typed variables. **Boolean** variables can only be set to one of two values: true or false. Let's print these variables:

```
console.log(hungry);
console.log(full);
```

prints:

```
true
false
```

Suppose we were no longer hungry. We can change the values of the variables:

```
hungry = false;
full = true;
```

####Conditionals

##### True `if`

**Conditionals** let us set a criteria and run different code based upon whether the criteria is met or not. Let's look at an example:

```
if (1 == 1)
{
  console.log("1 equals 1!");
}
```

Let's break this down line-by-line. On the first line, we check for equality by using the ``==`` **comparison operator**. This operator checks if the left side is equal to the right side. Because 1 is equal to 1, this condition is true. Therefore, the body of the `if` statement is executed. 

Thus, we see the following printed:

```
1 equals 1!
```

##### False `if`

What if the condition in the `if` statement were false? Something like:

```
if (1 == 2)
{
  console.log("1 equals 2!");
}
```

In this case, 1 is not equal to 2. The condition in the `if` statement is false. Therefore, the body of the `if` statement is never executed and we see nothing printed!

##### `if` `else`

What if we want to do one thing if our condition is true and another thing if our condition is false? We could:

```
if (1 == 2)
{
  console.log("1 equals 2!");
}

else
{
  console.log("1 does not equal 2!");
}
```

In this case, 1 is not equal to 2. The condition in the `if` statement is false. Therefore, the body of the `else` statement runs.

Thus, we see the following printed:

```
1 does not equal 2!
```

##### More comparison operators

To see the full list of comparison operators, go [here](http://www.w3schools.com/js/js_comparisons.asp).




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
