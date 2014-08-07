#Lesson 1 - jQuery

![image](http://i.imgur.com/UNTTbXt.jpg)

## Before class

### Objective

Students will be able to create, read, update, and delete HTML elements using jQuery. Additionally, they will be able to write and attach click handlers to an HTML element.

### Key points

* A selector is used to find one or more HTML elements in your page.
* A handler is used to execute a body of code after an event has occured. A common kind of handler is a click handler. 

### Assessment

1. Write do-now based off of [assessments from previous lesson](../../../8-hash/lessons/1-hash/assessments/).
2. Write exit-ticket based off [assessments from current lesson](assessments/).

Students will show progress toward reaching the objective based on their performance on the exit-ticket quiz.

### Vocabulary

* Selector
* Handler

### References

* http://www.w3schools.com/jquery/jquery_selectors.asp
* http://www.w3schools.com/jquery/jquery_events.asp
* http://www.w3schools.com/jquery/jquery_dom_get.asp
* http://www.w3schools.com/jquery/jquery_dom_set.asp
* http://www.w3schools.com/jquery/jquery_dom_add.asp
* http://www.w3schools.com/jquery/jquery_dom_remove.asp
* http://www.w3schools.com/jquery/jquery_css_classes.asp
* http://www.w3schools.com/jquery/jquery_css.asp

## During class

### Do-now

1. Attendance: http://scripted.org/attendance
2. Return graded do-now and exit ticket from previous class
3. Do-now quiz

### Opening

Today we will learn about jQuery. This is important because jQuery enables us to interact with our page in a dynamic way. It connects to what we've previously learned because we will able to access, add, remove, or change HTML and CSS. 

Let's review HTML & CSS first. What is HTML used for? What's a tag? Give me an example of some. What's an attribute? Give me an example. Let's review CSS now. What is it used for? Give me example of some CSS properties.

### Introduction of new material ("I do")

#### Getting started

##### Installation (1)

jQuery is a software library. It is a body of code that others have written so that we programmers could reuse it. 

Because it is a library, we need to import it into our own work before we can make use of it. jQuery is written in JavaScript and is contained in one file. To bring it into our own project, we have to use the same tag we would use when we want to bring in our own JavaScript file: the ``link`` tag.  

Copy the code below and paste it between the ``<head>...</head>`` tags in your HTML file: 

```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```

##### Installation (2)

To use jQuery, you must write JavaScript. Typically this JavaScript is stored in its own file. Suppose this file is called ``project.js``. We first create this file and then link it in our HTML page using the ``<script>`` tag. This latter tag must be included **after** the jQuery ``<script>`` tag. Thus, after the inclusion of both files, the ``<head>..</head>`` section of your page would look like:

```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="project.js"></script>
```

The ``project.js`` inclusion must be done after the jQuery inclusion because the browser loads scripts in order. Because ``project.js`` makes use of jQuery, it must be loaded after it.

##### Starter template



### Guided practice ("We do")



### Independent practice ("You do")



#### Exit ticket

Give exit-ticket quiz.

### Closing

Today you learned about strings. This is important because strings are used to store words and sentences that humans use to talk. Next, we will learn about conditionals.

#### Homework

[Link to homework](homework/)

Remind students when homework is due and how it will be collected.

## After class

* Grade do-now & exit-ticket. Record in class spreadsheet.
* Prepare for next lesson / hand off to next volunteer in rotation.
