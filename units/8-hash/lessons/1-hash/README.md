#Lesson 1 - Hashes

![image](http://i.imgur.com/FWOuXvf.jpg)

## Before class

### Objective

Students will be able to create, initialize, access, manipulate, and iterate through hashes.

### Key points

* Hashes, like arrays, are used to store data.
* Unlike arrays, hashes represent an unordered list through key-value pairs.
* Hashes can be stored inside hashes.

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../../7-array-loop/lessons/1-array/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Curly brace
* Key-value pair
* For-in loop

### References

* http://www.javascriptkata.com/2007/03/29/how-to-use-javascript-hashes/

## During class

### Do-now

1. Attendance: http://scripted.org/attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about hashes. This is important because hashes are a tool that programmers use to store a large set of unordered data. It connects to what we've previously learned because we will be able to perform array like operations with hashes. 

Someone give me an example of an ordered list in real life. A recipe is an example. An instruction manual is another. Now give me an example of an unordered list in real life. A grocery list is one. A classroom contains a list of chairs in no particular order. Let's talk how about how we can represent these kind of lists in JavaScript.

### Introduction of new material ("I do")

####Create and initialize a hash

```
var animalSounds = {cow: "Moo", cat: "Meow", dog: "Woof"};
```

Let's break this down right to left. Note the **open curly brace** (`{`) and **close curly brace** (`}`). These braces specify the beginning and end of the hash. This particular hash has three **key-value** pairs. Note that each key-value pair is separated by a comma. We then take this hash and store in a variable called `animalSounds`.

Let's talk about the key-value pairs more. In this hash, `cow`, `cat`, and `dog` represent keys. `"Moo"`, `"Meow"`, and `"Woof"` represent those keys' respective values. These values happen to be strings.

####Access and print an element of a hash

```
console.log(animalSounds["cat"]);
```

This prints out `Meow`. Here, `cat` is the key. Whereas with arrays we use indices to access elements, with hashes we use keys.

What if we want to access and print the value corresponding to the `dog` key of our hash?

```
console.log(animalSounds["dog"]);
``` 

This prints out `Woof`. 

And how about the value corresponding to the `cow` key?

```
console.log(console.log(animalSounds["cow"]);
```

This prints out `Moo`. 


####Change the value of a key-value pair in a hash

Let's change `cat`'s value:

```
animalSounds["cat"] = "Purr";
console.log(animalSounds["cat"]);
```

This prints out `Purr`.

####Add a key-value pair to the hash

What if we want to add another animal-sound pair to our hash? We can:

```
animalSounds["snake"] = "Hiss";
console.log(animalSounds["snake"]);
```

This prints out `Hiss`. 

####Iterate

What if we want to print every element in our hash? We can:

```
var animalSounds = {cow: "Moo", cat: "Meow", dog: "Woof"};

for (key in animalSounds) 
{ 
  console.log("key: " + key + ", value: " + animalSounds[key]); 
}
```

This is an example of a **for-in** loop. It will print each key-value pair in the hash. The above prints:

```
key: cow, value: Moo
key: cat, value: Meow
key: dog, value: Woof
```

####Hash in a hash

Like Matryoshka dolls (see picture at top), we can store hashes inside of other hashes:

```
var animalSounds = 
{
  cow: "Moo", 
  cat: "Meow", 
  dog: "Woof",
  bird: {robin: "Chirp", swan: "Cry"}
};

var birdSounds = animalSounds["bird"]

console.log(birdSounds["swan"]); 
```

Here, the `bird` key has a value that is a hash. So we first unload that hash into its own variable. Then we access like it any other hash.

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
