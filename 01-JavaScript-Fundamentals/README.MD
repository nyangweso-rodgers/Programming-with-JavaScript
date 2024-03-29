# `JavaScript` Fundamentals

## Table Of Contents

- [Console Methods in `js`](#Console-Methods-in-`js`)
- [`alert`, `confirm`, and `confirm` Boxes in `js`](#`alert`,-`confirm`,-and-`confirm`-Boxes-in-`js`)
- [Error Handling in `js`](#Error-Handling-in-`js`)
- [Local vs. Session Storage in `js`](#Local-vs.-Session-Storage-in-`js`)
- [`js` Modules](#`js`-Modules)
- [JavaScript Fundamentals]()

  1. [JavaScript Variables](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/js-Variables)
     1. Variable Declarations (`var`, `let`, and `const`)
     2. Variable Scope (`block`, `global` and `Function/Local` scopes)
     3. Variable Hoisting
  2. [JavaScript Data Types]()
  3. [JavaScript Control Structures](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/js-control-flow)
     1. `do...while` loop
     2. `for` loop
     3. `if` statements
     4. `swicth` statements
     5. `while` loop
  4. [JavaScript Functions](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/js-Functions)
     1. [How to Define Functions]()
        1. `function declarations`
        2. `function constructors`
        3. `function expressions`
        4. `arrow functions`

# Console Methods in `js`

1. Console Method 1: `console.log()`
   - prints the message on the console
     ```js
     const sampleObject = { firstName: "Rodgers", lastName: "Nyangweso" };
     console.log(sampleObject); // Output: { firstName: 'Rodgers', lastName: 'Nyangweso' }
     ```
2. Console Method 2: `console.error()`
   - outputs an error message in the console.
   - Helps in testing
     ```js
     console.error("This is an error message"); // Output: This is an error message
     ```
3. Console Method 3: `console.warn()`
   - outputs a warning message in the console
     ```js
     console.warn("This a warning!"); // output: This a warning!
     ```
4. Console Method 4: `console.time()`
   - measure how long a task in the code takes to run
   - `console.timeLog()` Outputs the current value of the time
   - `console.timeEnd()` stops timing the opration and outputs the final value of the timer
     ```js
     const message = "Time taken: ";
     console.time(message); // Output: undefined
     console.timeLog(message); // Output: Time taken: : 0.081ms
     console.timeEnd(message); // Output: Time taken: : 0.34ms
     ```
5. Console Method 5: `console..group()`

   - groups the message in the console. very helpful when there are too many messages
   - `console.groupEnd()` this ends the group which is initiated lastly
     ```js
     console.group("Group I");
     console.group("First message under Group I");
     console.group("Second message under Group I");
     console.group("This group will be made under Group I");
     console.log("First message under sub-group of I");
     console.groupEnd("Exits the subgroup");
     console.groupEnd("Exits Group I");
     console.groupEnd("Exits Group I");
     console.log(2);
     ```

6. Console Method 6: `console.table()`
   - outputs the array of objects in a clean and clear tabular form.
     ```js
     const people = [
       {
         firstName: "Rodgers",
         lastName: "Nyangweso",
         age: 28,
         location: "Nairobi",
       },
       {
         firstName: "Wilson",
         lastName: "Nyangweso",
         age: 57,
         location: "Kisumu",
       },
     ];
     console.table(people);
     ```
7. Console Method 7: `console.assert()`
   - outputs the message only when the condition (first argument) is evaluated as false
     ```js
     const year = 2022;
     console.assert(year > 2023, "This is true"); // Output: Assertion failed: This is true
     ```
8. Console Method 8: `console.trace()`

   - traces how the code ended up at a certain point. very helpful method as it simplifies the debugging process

     ```js
     function addition(x, y) {
       console.log(x + y);
     }

     function multiplication(x, y) {
       console.trace(x * y);
     }
     addition(2, 3); // Output: 5
     multiplication(2, 3);
     ```

9. Console Method 9: `console.count()`

   - outputs the number of times a call is called in the console
   - `console.countReset()` resets the counter

     ```js
     for (i = 1; i <= 2; i++) {
       console.count();
     }

     for (i = 1; i <= 2; i++) {
       console.count();
     }
     ```

10. Console Method 10: `console.dir()`
    - outputs the properties of the specified objects in the console
      ```js
      const person = { firstName: "Rodgers", lastName: "Nyangweso" };
      console.log(person); // Outputs: { firstName: 'Rodgers', lastName: 'Nyangweso' }
      console.dir(person); // Output:
      ```

# `alert`, `confirm`, and `confirm` Boxes in `js`

- `alert`:

  - an `alert` box is used when you want to ensure that information gets through to the user.
  - when an `alert` box pops up, the user must click `OK` to proceed.
  - the `alert` function takes a single parameter, which is the text displayed on the pop up boxes.

  ```js
  alert("Dou you really love me?");

  // to display line breaks within a popup box, use the backlash followed by the character n
  alert("do you really love him?\nmaybe");
  ```

- `prompt`:

  - the `prompt` often used to have a user input a value before entering a page.
  - when a **prompt box** pops up, the user will have to click `Ok` or `Cancel` to proceed after entering the input value. if the user clicks `OK`, the box returns the input value if the user clicks `CANCEL`, the box returns null.

  ```js
  // the prompt() method takes two parameters:
  // .the first is the label, which you want to display in the text box
  // .the second is a default string to display in the text box (optional)
  var user = prompt("kindly, enter your name to proceed");
  alert(user);
  ```

- `confirm`:

  - `confirm` box is often used to have the user verify or accept something.
  - when a `confirm` box pops up, the user must either click `OK` or `Cancel` to proceed.

  ```js
  // ..if the user clicks OK, the box returns true.
  // .if the user clicks Cancel. the box returns false
  var result = confirm("do yoy really want to leave this page?");
  if (result == true) {
    alert("Thank you for visiting this page");
  } else {
    alert("Thank for staying with us.ENJOY OUR SITE");
  }
  ```

# Local vs. Session Storage in `js`

- Both **local** and **session storage** are properties of the window object that let web applications store data locally within the user's browser.
  ```js
  myStorage = window.localStorage;
  /*myStorage object can be used to access the current origin's local storage space */
  ```
- In **Local Storage**:

  - data has no expiration date
  - When using **local storage** every tab with the same origin can access it's data.

- In **session storage**:
  - data gets cleared when the tab or browser is closed.
  - When using **session storage** every tab with the same origin creates a new session storage, **getItem('fruit')** can result in two different values in two tabs with the same origin.

# Error Handling in `js`

- `js` use `try...catch` construct to handle errors.
- The `try` statement allows you to define a block of code to be tested for errors while it is being executed.
- The `catch` statement allows you to define a block of code to be executed, if an error occurs in the try block.
- The `finally` statement lets you execute code, after try and catch, regardless of the result:

  ```js
  try {
    console.log("get's executed successfully without error");
    // no error here, so the catch will be skipped
  } catch (e) {
    console.log("no error, catch is skipped");
  } finally {
    //
  }
  ```

- if the `try` block doesn't run successfully and leads to an error, then the code inside `catch` block will be executed.

# Introduction to `ES6`

- `ECMAScript` (`ES`) is a scripting language specification created to standardize `JavaScript`.
- The sixth edition, initially known as `ECMAScript 6` (`ES6`) and later renamed to `ECMAScript 2015`, adds significant new syntax for writing complex applications.

## New Features in `ES6`

1. `let` and
2. `const` keywords
3. Arrow Functions
4. The ... Operator
5. `For/of`
6. Map Objects
7. Set Objects
8. Classes
9. Promises
10. Symbol
11. Default parameters
12. Function Rest Parameter
13. `String.includes()`
14. `String.startswith()`
15. `String.endswith()`
16. `Array.from()`
17. Array `keys()`
18. Array `find()`
19. Array `findIndex()`
20. New `Math` Methods
21. New Number Properties
22. New Number Methods
23. New Global Methods
24. Object entries
25. JavaScript Modules

- i.e., `ES6` is a superset of `JavaScript` (`ES5`). the reason that `ES6` became so popular is that it introduced new conventions and OOP concepts such as classes.

# Resources

1. [JavaScript Modules – Explained with Examples](https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/)
