#Lesson 1 - Variables

![image](http://i.imgur.com/xwrZiJd.jpg)

## Before class

### Objective

Students will able to create, instantiate, and edit variables in JavaScript.

### Key points

* JavaScript is a programming language that we can run in our browser.
* Variables are like boxes; they store something.
* Variables have a name and a value.
* We can perform various operations on variables.
* Each variable has a type.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../3-css/lessons/1-xxx/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* JavaScript
* Variable
* Instantiate
* Assign
* Increment / Decrement
* Arithmetic operation
* Type

### References

* https://docs.google.com/presentation/d/1CAMz_T9qWWL6GSNx70ZtxwLm-AAN0sBgPaQMDtJ3ZD0/edit#slide=id.g11014a258_073
* http://www.mathsisfun.com/operation-order-pemdas.html
* http://www.w3schools.com/js/js_variables.asp
* http://www.w3schools.com/js/js_datatypes.asp
* http://www.w3schools.com/js/js_functions.asp
* http://www.w3schools.com/js/js_comments.asp

## During class

### Do-now

1. Attendance: http://scripted.org/attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about variables in JavaScript. This is important because we can use variables to store things that we can later on look up. It connects to what we've previously learned because we will be able to, eventually, write JavaScript code that interacts with the HTML & CSS we have written before.

What is a programming language? Give me some examples. Remind me what a browser is. JavaScript is also a programming language and we can run it in our browser.

What is a box? Why do we put things in a box? Can we take things out of the box once we've put stuff in it? 

### Introduction of new material ("I do")

####Instantiate, print and change a variable

**Variables** in JavaScript are like boxes in real life. All variables have a **name** and a **value**.

```
var singer = "Justin Bieber";
```

This is an example of one variable that has a name called ``singer`` and a value called ``"Justin Bieber"``. We could say it is **instantiated** to the value ``"Justin Bieber"``. Notice the ``var`` keyword too; this is how we tell JavaScript we are making a new variable. Also notice the semi-colon at the end of the line; this is how we tell JavaScript we are done with a line of code. 

Suppose we want to print the value of the variable:

```
console.log(singer);
```

This line prints ``"Justin Bieber`` to the console using the ``log()`` function. We'll explore both the console and functions later on in this unit. For now, pass in any variable you create into the console.log() function to print it out..

Suppose our favorite singer is Ariana Grande, not Justin Bieber. We could change the value of the variable:


```
singer = "Ariana Grande";
console.log(singer);
```

This code prints out ``"Ariana Grande"`` to the console. 

####Arithmetic operations

Once we've stored something into a variable, we can do things with it. Suppose we have a variable that stored a number:

```
var age = 10;
```

Suppose we want to add two years to this age. We could use the `+` or addition operator:

``age = age + 2;``

Let's read this right to left. We're taking the number 2 and then adding it to the variable ``age``. We're then setting the result of that addition to the variable ``age``. So if we did:

``console.log(age);``

We would see ``12`` get printed out. We can similarly use the ``-`` (subtraction), ``/`` (division), and ``*`` (multiplication) operators. 

Suppose we want to double the age to 24. We could

```
age = age * 2;

OR

age = age + age;
```

Let's talk about the second suggestion. Again, right to left: take the variable ``age`` (which is currently set to 12) and add it to ``age`` again (also set to 12). The result of the addition is 24 which then gets stored in the variable ``age``.  

So 

``console.log(age)``

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







