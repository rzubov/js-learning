# crm-js-learning
CRM JavaScript learning

# Lecture #0
1. A Brief History of JavaScript
    * https://en.wikipedia.org/wiki/JavaScript
    * https://auth0.com/blog/a-brief-history-of-javascript
2. keywords: [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var), [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function), [typeof](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof)
    * https://learn.javascript.ru/let-const
3. what is window object in JavaScript
    * https://www.w3schools.com/js/js_window.asp
4. window.document, DOM basics
    * https://developer.mozilla.org/en-US/docs/Web/API/Window/document
    * https://www.tutorialspoint.com/javascript/javascript_html_dom.htm  
5. console(window object), some console functions: [console.log](https://developer.mozilla.org/uk/docs/Web/API/Console/log), [console.warn](https://developer.mozilla.org/uk/docs/Web/API/Console/warn), [console.error](https://developer.mozilla.org/uk/docs/Web/API/Console/error), etc.
    * https://developer.mozilla.org/uk/docs/Web/API/Console  
6. data types and data structures.
  * Primitives:  [string](https://developer.mozilla.org/en-US/docs/Glossary/String) ,[number](https://developer.mozilla.org/en-US/docs/Glossary/Number), [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean), [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined), [null](https://developer.mozilla.org/en-US/docs/Glossary/Null)(null type is object, null is a global object)
  * Complex: [object](https://developer.mozilla.org/en-US/docs/Glossary/Object) ,[array](https://developer.mozilla.org/en-US/docs/Glossary/Array) (array type is object, Array is a global object, represents indexed collection), [function](https://developer.mozilla.org/en-US/docs/Glossary/Function) (function has it's own type, but it's a fundamental object too)
  * Links:
    * https://www.w3schools.com/js/js_datatypes.asp
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
7. [Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) and [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
    * https://learn.javascript.ru/function-declaration-expression
8. Interaction with user. [window.alert](https://developer.mozilla.org/ru/docs/Web/API/Window/alert), [windows.confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)  


# Lecture #1 
1. Repetition of Lecture #0
2. more about types
3. more about variables
4. null example to be added
5. Base math operators, +, -, *, /

# Lecture #2
1. homework analysis
2. external vs internal scripts, order of scripts load and execution. [async](https://www.w3schools.com/tags/att_script_async.asp), [deffer](https://www.w3schools.com/tags/att_script_defer.asp) script attribute
    * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
3. basic operators. Unary and binary operators, [operand](https://developer.mozilla.org/en-US/docs/Glossary/Operand).
  * Operators: [increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment)(++), [decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement_(--))(--), [Compound assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators)(e.g: let x +=5;), [Reminder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder)(%)
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/expressions_and_operators

# Lecture #3  
1. Finished with basic operators: [comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator)(,), [bitwise NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT) (~) and role of Bitwise not in search functions
2. Logical operators: [Logical NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT)(!), [Logical OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR)(||), [Logical AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND)(&&)
3. Comparison Operators: [Equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_operators)(==),[Inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality_(!))(!=), [Identity/strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity_strict_equality_())(===), [Non-identity/strict inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Non-identity_strict_inequality_(!))(!==), [Greater than or equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator_(>))(>=), [Less than or equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator_(<))(<=)
4. [Operators precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)
5. Interaction with user. [window.alert](https://developer.mozilla.org/ru/docs/Web/API/Window/alert), [windows.confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm), [windows.prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)

# Lecture #4
1. Repetition of Lecture #3
2. if/else if/else repetition, [Conditional (ternary) conditional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator), if/else if/else vs ternary ?:
3. Object data type, navigation by the objects and arrays. Functions in the object.
4. [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

# Lecture #5
1. Loops: [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while), [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

# Lecture #6
1. Loops: [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for), [for..in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
2. [switch/case construction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

# Lecture #7
1. [switch/case construction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
2. [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) and [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) statements
