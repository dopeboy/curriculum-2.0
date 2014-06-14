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
* Prompt
* Input
* Output
* Console
* Debug
* Scope
* Library

### References

* https://docs.google.com/presentation/d/1CAMz_T9qWWL6GSNx70ZtxwLm-AAN0sBgPaQMDtJ3ZD0/edit#slide=id.g11014a258_073
* http://www.w3schools.com/js/js_functions.asp
* https://developer.chrome.com/devtools/docs/console

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

#####Alert

A **function** is a block of code that performs a task. To use a function, you must **call** it. Let's call the `alert` function:

```
alert("Squirrel!");
```

Here, the name of the function is "alert". Notice the open and closed parentheses; every call to a function must have both. In this case, we also specified a **parameter** to the function: the string "Squirrel!". A parameter is a variable or value that is passed to a function to help perform its job. The `alert` function takes the parameter and displays a pop-up box with the contents of what was passed to it. We can also call this parameter the **input** to the function because it is going *in* to the function. The pop-up box is the **output** to the function because it is the result of it.

The `alert` function was written by someone else. We don't know how it works and we don't need to. This makes our life easier because everytime we want to make a pop-up box with text in it, we don't have to recreate the wheel. Someone else did the hard work for us. 

#####Prompt

The **`prompt`** function lets us (1) ask the user a question and (2) store the answer to the question in a variable. Let's look at an example:

```
var name = prompt("What is your name?");
alert(name);
```

Here, the user is asked for their name in the form of a pop-up box. Then, that name is printed in another pop-up box. This is also a function that someone else wrote for us.

#####Console

A **console** is a tool that lets you investigate or **debug** your code. We can use the `log` function to print statements to the console:

```
console.log("Wingardium leviosa!");
```

Here, the function's name is `log`. The parameter is a string `Wingardium leviosa!`. And the output is the text printed in the console window. We can also print variables too:

```
var dozen = 6+6;
console.log(dozen);
```

This will print out `12` to the console.

#####Math



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



