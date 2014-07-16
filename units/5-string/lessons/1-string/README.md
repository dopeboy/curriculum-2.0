#Lesson 1 - Strings

![image](http://i.imgur.com/e0rn7sJ.jpg)

## Before class

### Objective

Students will be able to create, initialize, access, manipulate, compare, and cast strings.

### Key points

* Strings are made up of multiple characters. A set of characters "strung" together make a string.
* Existing functions can be used to manipulate strings.
* The first index of a string is 0. The last index is length-1.
* Strings can be cast to a number and vice versa.
* Strings can be compared to one another.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../4-javascript/lessons/3-pseudocode/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* String
* Double quotes
* Index
* Concatenate
* Trim
* Cast

### References

* http://www.w3schools.com/js/js_strings.asp
* http://www.w3schools.com/js/js_string_methods.asp

## During class

### Do-now

1. Attendance: http://scripted.org/attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about strings. This is important because strings store what we humans use everyday to communicate with each other: words and sentences. It connects to what we've previously learned because we will be able to create variables to store strings. Additionally, we will get to call pre-built functions to manipulate strings.

Someone give me an example of a word. Any word. What is a word made up of? How can I change this word? How can I add more to the word?

### Introduction of new material ("I do")

####Create, initialize, and access a string

```
var buzz = "To infinity, and beyond!";
```

Let's break this down right to left. Notice the **double quotes** (`"`). All strings start and end with them. Inside the double quotes we find the actual contents of the string which is a sentence in this case. Your text editor will change the color of the contents of your string. It does this because it wants to visually assist you when you are reading your code.

This string is then stored in a variable called `buzz`. Now let's print it:

```
console.log(buzz);
```

This prints out `To infinity, and beyond!` to the console.

####String manipulation

#####String length

Suppose we want to find the size of our string. We can:

```
var bluefish = "Dory";
console.log(bluefish.length);
```

All strings have a length attribute. The above will print `4` to the console.

#####Access character

Suppose we want to find the first character of a string. We can:

```
var bluefish = "Dory";
console.log(bluefish.charAt(0));
```

**charAt** is a function that takes in one parameter. This parameter is the **index** or position inside the string. Notice how the first letter of a string is always at the 0 index. (This has to do with computers starting count at 0 instead of 1. We'll learn more about this in the arrays section.) The above prints `D` out to the console.

What if we want to print the last character? We can:

```
var bluefish = "Dory";
console.log(bluefish.charAt(bluefish.length-1));
```

Let's first think about what `bluefish.length-1` means. We know the length is 4 from above. 4-1 results in 3. So we are asking for the character at the 3rd index in our string. Note that the last character in a string will always be one less than its size.


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
9. How do I select the first two vegetables from our array?
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
