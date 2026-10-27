# Assignment 4 Theory

## Part A: Objects

A JavaScript object stores related data in named properties. A property can
contain a value, an array, or another object. Properties can be accessed with
dot notation or bracket notation.

## Part C: JSON

A JavaScript object can be used directly in a program. JSON is text used to
store or transfer data. JSON uses double quotes around keys and text values.
JSON.parse() changes JSON text into JavaScript data, and JSON.stringify()
changes JavaScript data back into JSON text.

## Part D: Call stack

1. From bottom to top, the stack is: global, startLoan(),
   registerLoan(), and printReceipt().
2. After printReceipt() finishes, registerLoan() resumes. Then
   registerLoan(), startLoan(), and the global script leave the stack.
3. A function call adds a frame to the top of the stack. A return removes the
   top frame. This is called last in, first out (LIFO).

## Part E: Error handling

An exception means that an operation could not finish normally. JavaScript
looks for a matching catch block. An Error object has a name and a message.

A program can catch an error to show a useful message, reject bad data, or
continue with other work. Throwing is better than if...else when a function
cannot do its job because its input is invalid. An ordinary result, such as an
empty list, can usually be handled with if...else.


