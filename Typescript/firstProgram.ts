
//how to print on console
console.log("Hello, TypeScript!")

// JS and TS  - functional PL which has given a bit of support to OOP concepts
// TS is a superset of JS
// TS adds static typing to JS
// To execute the compiled JS file use command: node firstProgram.js

let i  =10
console.log(i)

// 3 diff keywords to declare a variable in TS/JS
// 1. var  - function scoped (in modern JS/TS, avoid using var) -- version 5    
// 2. let  - block scoped (If you want to change the value of variable in future of the script)
// 3. const - block scoped and value cannot be changed (To declare constants--- final values)

//What is a diff between var, let and const

let language = "TypeScript"

{
   // console.log("Inside block: " + language) // TypeScript
   // if you uncomment the above line, it will print TypeScript because of lexical scoping

    let language = "JavaScript"
    console.log("Inside block: " + language) // JavaScript

}