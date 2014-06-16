#Lesson 3 - Pseudo-code & comments

![image](http://i.imgur.com/p3Lk9UX.jpg)

## Before class

### Objective

Students will able to transform pseudo-code into actual JavaScript code. They will be able to appropriately comment their code.

### Key points

* When we're given a programming task, we first think about it in our heads and with paper and pencil. Only when this is complete can we move to the keyboard.
* Pseudo-code is like an outline for an essay; it communicates the gist of what you're going to write without specifying all the details.
* Comments are a way for programmers to document their code so that others can understand it.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../4-javascript/lessons/2-function/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Pseudo-code
* Design
* Algorithm
* Code comments

### References

* http://www.w3schools.com/js/js_comments.asp
* http://en.wikipedia.org/wiki/Algorithm
* http://en.wikipedia.org/wiki/Pseudo_code

## During class

### Do-now

1. Attendance: http://scripted.org/attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about how to approach a programming problem. We will also learn how to document our code so that others can understand it. The former is important because programming problems can be very complex. Having a certain approach can help break down the complexity. The latter is important because you will eventually be programming alongside others. They will need to be able to understand your code and vice versa.

Why should we think about something before we actually do it? When do we practice this procedure? How does it help in each case?

What's an architect? What do they do? What document do they use to capture their design? Why do they make this document?

### Introduction of new material ("I do")

####Design

When you're given a programming task, do not go to the keyboard. In fact, take a step away from the computer. Sit down at a desk and think about the task in your head. Here are some questions you should ask yourself:

1. What are the inputs and outputs to the program? 
2. Is there an **algorithm** or step-by-step procedure of calculations for your program? Are there any formulas involved?
3. What's the pseudo-code for the program?

Let's talk more about (3) in the next section.

####Pseudo-code

**Pseudo-code** is a rough representation of what your code will look like. It is not runnable JavaScript code. It is written in plain english. 

Think about what you do before you write an essay. You brainstorm. You create an outline. You might create other diagrams to help you understand both the topic you're going to write about as well as the structure you plan to put your writing into. Similarly, programmers write pseudo-code before they write their actual code.

####Example

Suppose you were given the task to write a program that converts human years to dog years. Let's go through each of the three questions above:

1. Inputs & outputs: the program will probably take in a number that represents human years and spit out a number that represents dog years.
2. Algorithm: is there a formula we can use? A quick google search returns [this](http://www.onlineconversion.com/dogyears.htm) page. The formula is: 10.5 dog years per human year for the first 2 years, then 4 dog years per human year for each year after.
3. Pseudo-code: let's take (1) & (2) and write, in basic english, what we expect our program to do.

```
create a variable called x
create a variable called y

ask user for human years, store it in a variable x

if x is less than or equal to 2 then
  store x*10.5 in y
else
  store x*4 in y
  
print out y
```

Note the use of plain-english; there is no JavaScript above. This pseudo-code gives us a chance to focus just on the logic of the problem. We do not have to worry about syntax errors, bad input/output, or any program language specific problems. Let's now convert the above into real JavaScript code:

```
var x = 0;
var y = 0;

x = prompt("How old is your dog in human years?");

if (x < 2)
  y = x*10.5;
else
  y = x*4;
  
console.log(y);
```

This is code we can run and use. Note the similarities and differences between it and the pseudo-code. Also note the use of the `if` and `else` statements. We will explore them in more detail later but for now, know that they can be used to test a condition.

### Guided practice ("We do")

I want to write a function that converts meters to feet.

1. Let's think out loud before we start typing. What are the inputs and outputs to the function?
2. What's the formula to convert a meter to a foot?
3. What's an appropriate name for our function?
4. We've completed the prep work. Let's write the function together.

### Independent practice ("You do")

Write a function that simulates the rolling of a 9 sided die.

1. Think out loud before you start typing. What are the inputs and outputs to the function?
2. What's the formula to get a random number between 1 and 9?
3. What's an appropriate name for your function?
4. You've completed the prep work. Write the function in JavaScript. Call it a couple times to ensure it works correctly.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about how to call and create functions in JavaScript. This is important because functions let us package code that we can reuse over and over again. Others have written functions that we can use in our programs. We can also create functions to reuse in our own programs. Next, we will learn about pseudo-code and code commenting.

#### Homework

[Link to homework](homework/)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.



