#Lesson 2 - Functions

![image](http://i.imgur.com/oaxSIDO.jpg)

## Before class

### Objective

Students will able to call and create functions in JavaScript.

### Key points

* A function is a block of code that performs a task. To use a function, you must call it. 
* A parameter is a value or variable that is passed into a function. The function uses this variable to help perform its task.
* We use functions so that we do not have to rewrite code over again.
* Other programmers write functions for us to make our lives easier. These functions together form a library.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../4-javascript/lessons/1-variable/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Function
* Call
* Body
* Parameter
* Input
* Output
* Console
* Scope
* Library

### References

* https://docs.google.com/presentation/d/1CAMz_T9qWWL6GSNx70ZtxwLm-AAN0sBgPaQMDtJ3ZD0/edit#slide=id.g11014a258_073
* http://www.w3schools.com/js/js_functions.asp

## During class

### Do-now

1. Attendance: http://scripted.org/attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about functions in JavaScript. This is important because functions let us package code into blocks that we can reuse. It connects to what we've previously learned because we can take the code we've written before and package it into functions. This will prevent us from writing the same code over and over again. We've also been using a handful functions already and this lesson will explain how and why we've been doing that.

What's a function in math? Why do we use them? 

What's a washing machine? Why do we use one? Couldn't we just wash our clothes manually everytime they got dirty? What do we have to give to a washing machine in order for it to performs its task? What do we get when it is done?

### Introduction of new material ("I do")

####Calling an existing function

A **function** is a block of code that performs a task. To use a function, you must **call** it. Let's call the `alert` function:

```
alert("Squirrel!");
```

Here, the name of the function is "alert". Notice the open and closed parentheses; every call to a function must have both. In this case, we also specified a **parameter** to the function: the string "Squirrel!". A parameter is a variable or value that is passed to a function to help perform its job. The `alert` function takes the parameter and displays a pop-up box with the contents of what was passed to it. 

####Arithmetic operations

Once we've stored something into a variable, we can do things with it. Suppose we have a variable that stored a number:

```
var age = 10;
```

Suppose we want to add two years to this age. We could use the `+` or addition operator:

```
age = age + 2;
```

Let's read this right to left. We're taking the number 2 and then adding it to the variable ``age``. We're then setting the result of that addition to the variable ``age``. So if we did:

```
console.log(age);
```

We would see ``12`` get printed out. We can similarly use the ``-`` (subtraction), ``/`` (division), and ``*`` (multiplication) operators. 

Suppose we want to double the age to 24. We could

```
age = age * 2;

OR

age = age + age;
```

Let's talk about the second suggestion. Again, right to left: take the variable ``age`` (which is currently set to 12) and add it to ``age`` again (also set to 12). The result of the addition is 24 which then gets stored in the variable ``age``.  

So 

```
console.log(age)
```

now gives us 24.

#####Order of operations

Remember PEMDAS:

1. Parenthesis
2. Exponent
3. Multiplication
4. Divison
5. Addition
6. Subtraction

These are the same order of operations you follow in math class. See link in references for more.

#####Increment / Decrement

It's your birthday today. You were 16 yesterday and now you are 17 today. Let's represent this in JavaScript:

```
var yesterdayAge = 16;
var todayAge = yesterdayAge + 1;
console.log(todayAge);
```

This prints out ``17`` like we expect. But line two took forever to write. Let's shorten it by using the **increment** operator. 

```
todayAge = yesterdayAge++;
console.log(todayAge);
```

This first line from above is equivalent to the second line from earlier. We can similarly use the ``--`` or **decrement** operator to decrease the value of a variable by 1.

####Types

Every variable in JavaScript has a type. So far, we have seen two types: strings (which have quotes around them) and numbers. We can use the ``typeof`` function to print the type. 

```
var name = "Justin Bieber";
var age = 22;
console.log(typeof(name));
console.log(typeof(age));
```

prints out 

```
string
number
```

Suppose we instead had the following:

```
var age = "22";
```

What type is the above variable? 

```
console.log(typeof(age));
```

prints out ``string`` because we put quotes around 22. This tells JavaScript to treat the value as a string.

### Guided practice ("We do")

Write one variable that is named "modeOfTransit" and is set to the string "bicycle." Write another variable that is named "numberOfWheels" and set it to the number 2.

1. How do I print out the values of both variables?
2. How do I change the value of the modeOfTransit variable to "tricycle"?
3. How do I change the value of the numberOfWheels variable to 3?
4. How do I multiply the value of the numberOfWheels variable by 2? 
5. How do I decrease the numberOfWheels variable by 1 without using the subtract operator?

### Independent practice ("You do")

Write one variable that is named "character" and is set to the string "Shrek." Write another variable that is named "heightInFeet" and set it to the number 6.

1. How do I print out the values of both variables?
2. How do I change the value of the character variable to "Fiona"?
3. How do I change the value of the heightInFeet variable to 5?
4. How do I divide the value of the heightInFeet variable by 2? 
5. How do I increase the character variable by 1 without using the addition operator?

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about variables in JavaScript and JavaScript itself. This is important because JavaScript is a programming language that we will eventually use to interact with HTML & CSS. Variables are important because they let us store values that we can manipulate later on. Next, we will learn about functions.

#### Homework

[Link to homework](homework/)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.



