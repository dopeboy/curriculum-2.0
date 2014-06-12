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

####Create, instantiate, and change a variable

**Variables** in JavaScript are like boxes in real life. All variables have a ***name** and a **value**.

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

Once we've stored something into a variable, we can do things with it. Suppose we had a variable that stored a number:

```
var age = 10;
```



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

What if we want to do one thing if our condition is true or another thing if our condition is false? We could:

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

##### `else if`

What if we wanted to do one thing if it met a certain condition or another thing if it met a separate condition? We could:

```
if (1 == 2)
{
  console.log("1 equals 2!");
}

else if (3 == 3)
{
  console.log("3 equals 3!");
}
```

In this case, the `if` statement's condition is false. Therefore, we check the `else if` condition. Because 3 does equal 3, we see the following printed:

```
3 equals 3!
```

##### More comparison operators

To see the full list of comparison operators, go [here](http://www.w3schools.com/js/js_comparisons.asp).

####Conditionals with logical operators

#####``!``

Suppose we have two variables and we want to check that they do not equal each other. We can do this:

```
var x = 1;
var y = 2;

if (!(x == y))
{
  console.log("x does not equal y");
}

// OR

if (x != y)
{
  console.log("x does not equal y");
}
```

Both `if` statements are equivalent.

#####``&&``

What if we want to test for more complex conditions in our `if` statements? Consider the following example:

```
var tail = prompt("Do you have a tail?");
var color = prompt("What color are you?");

if (tail == "Yes" && color == "Green")
{
  console.log("You are Rex, the dinosaur.");
}

else if (tail == "Yes" && color == "Brown")
{
  console.log("You are Slinky, the dog.");
}

```

Let's start at line 5. Here, we are testing for both conditions to be true. The `&&` **logical operator** stands for "and." In order for the body of the `if` statement to run, both conditions must be true. That is, the user must have entered "Yes" and then "Green" in order for `You are Rex, the dinosaur` to print. If this doesn't happen, the same rules apply to the proceeding `else if` statement.

#####``||``

Similarly, we can use the ``||`` logical operator to act as an "or." Consider the following example:

```
var hat = prompt("Do you wear a hat?");
var boots = prompt("Do you wear boots?");


if (hat == "Yes" || boots == "Yes")
{
  console.log("You are Sheriff Woody. There's a snake in my boot!");
}

else
{
  console.log("I don't know who you are.");
}
```

Let's break this down line-by-line. On line four, if either `hat` is equal to "Yes" *or* `boots` is equal to "Yes", the body of the `if` statement will run. Suppose the user enters in "No" to both questions. In this case, the `if` condition is false. Therefore, we would see ``I don't know who you are`` get printed.

#### Nested conditionals

We can put `if` statements inside other `if` statements. This is called **nesting**. Here's an example:

```
var gender = prompt("What gender are you?");

if (gender == "Male")
{
  var size = prompt("What size is your tuxedo?");
  
  if (size == "large")
  {
    console.log("Your waist size is a 38.");
  }
  
  else if (size == "medium")
  {
    console.log("Your waist size is a 34.");
  }
  
  else if (size == "small")
  {
    console.log("Your waist size is a 32.");
  }  
}

else if (gender == "Female")
{
  var dress = prompt("What color is your dress?");
  
  if (dress == "Orange")
  {
    console.log("It must be fall.");
  }
  
  else if (dress == "Green")
  {
    console.log("It must be spring.");
  }
}
```
Here, we first ask the user's gender. Based on the gender, we ask different questions. If the user is a male, we ask them about the size of their tuxedo because only men wear tuxedos. However, if they are female, we ask them about the color of their dress because only women wear dresses. 

### Guided practice ("We do")

Write two boolean variables and initialize them to `false`. Name the variables "elephant" and "mouse."

1. How do I print out the values of both variables?
2. How do I change the value of the `elephant` variable to `true`?
3. How do I print out "I am an elephant" if the value of `elephant` is `true`?
4. How do I print out "I am not a mouse" if the value of `mouse` is `false`?
5. How do I print out "I might be an elephant or a mouse" if either `elephant` or `mouse` is true?
6. How do I change the value of `mouse` to true?
7. How do I print out "I have a tail" if both `elephant` and `mouse` are true?
8. Suppose we're building a website for Nemo, Dory, (both fishes) and Bruce (shark). We want to find out who of those three is using our website. We first need to ask them whether they are a fish. If they are a fish, we need to ask them what color they are. How do I write code that does this and prints out who they are?

### Independent practice ("You do")

Write two boolean variables and initialize them to `false`. Name the variables "woody" and "buzz."

1. Print out the values of both variables.
2. Change the value of the `woody` variable to `true`.
3. Print out "I am a Woody. There's a snake in my boot!" if the value of `woody` is `true`.
4. Print out "I am not a Buzz. Can't go to infinity and beyond!" if the value of `buzz` is `false`.
5. Print out "I might be Woody or Buzz" if either `woody` or `buzz` is true.
6. Change the value of `buzz` to true.
7. Print out "I am Andy's favorite" if both `woody` and `buzz` are true.
8. Suppose you're building a website for Ken, Barbie, & Big Baby. You want to find out who of those three is using your website. We first need to ask them whether they are an adult. If they are an adult, we need to ask them their gender. Write code that does this and prints out who they are.

#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about booleans, conditionals, logical, and comparison operators. This is important because these tools enable us to write sophiscated code that can run in different ways based upon the criteria we set. Next, we will learn about hashes and functions. 

#### Homework

[Link to homework](homework/)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
