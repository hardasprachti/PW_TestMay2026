// functions -- a set of instructions that performs specific task 

// 1. Named function - Function declaration - A function  which has a name which we can use at multiple places
// 2. Anonymous function -  Function Expression without having any function name 

let i = 10 // Expression 
let j = Function  // Function expression 
// 3. Arrow  Function - Lambda function  -- ES6 (2015) version 
// 4. Constructor function  == Its is used to create an object 

// whenever you declare  a func as a parameter of another function is known as call back function

/*
JS:
function functionName(parammeter){
block of code 
return value
} // syntax to declare function in JS
call the function 
functionName(argument)
*/

//TS:
/*
function functionname(parameter:DataType(optional)) : returnType(optional){
//block of code
return 
}
//void: no return type 
*/

function greet(){
    console.log("Welcome to Typescript")
}

greet()
//parameterized return function 
function add(a:number, b: number){
    return (a+b) 
}

console.log(add(2,4))
// non parameterized return function
function greetings(){
    return "Welcome to typescript"
}

const greeting = greetings()
console.log(greeting)

// 2. Anonymous function -  function expression
//A function which is declared without any name is known as function expression.This will be stored in a 
//a variable and that variable becomes the name of teh function. 
/*Syntax: 

let functionName = function (param: datatype(optional)): returntype: (optional){
// code to be executed
return ......
}

calling--- 
const result = functionName(argument) // if it has retun type then the
//  returned value is stored in result
*/


//Call back function - A function which will be utilized as a paramaeter of 
// another function is known as call back function

let message = function(name:string, age:number){
    console.log(`Your name is ${name} and age is ${age}`);
}

message("Rahul", 24)

//3. Arrow function - Lambda function  
//Will be same as anonymous func will not have name 
//This will be declared by using (=>) symbol afeter the paranthesis
// Shorten the number of lines of the code 
//If there is only one line of code then we can skip the usage of curly braces {} 
//


/*
Syntax: 
(param: datatype)=> {
//code
return... 

}
*/

let sub = (a:number, b:number)=>{
    console.log(a-b);
}

sub(5,4)

//single line pf code no curly braces required
let sum = (a:number, b:number, c:number)=>console.log(a+b+c) 
sum(10,20,30)

let sum1 = (a:number, b:number, c:number)=>(a+b+c) // implcitly returns the value 

let sum1Result = sum1(10,20,30)
console.log(sum1Result)

let square = (a:number) => console.log(a**2) // no paranthesis required for single parameter
//only when you declate the datatype u need to provide datatype

square(10)


// we do not have concept of method overloading and method overriding

// but we can try to do this by using default parameter and optional parameter

//Default parameter = A parameter which has the default value  is known as default parameter

function name1(a:number,b:number=5){
    console.log(a+b)
}
name1(10)
name1(10,20)

//Optional parameter (p?) will have a question mark   - A paramter which may or may not be provided with a value during the function call 
//is called asoptional paramter
//optional paramter will not 

function display(name:String, age?:number){
    console.log(name, age)
}

display("Rohan")
display("Rohan", 30)

//default and optional should always be after the mandatory parameters 

//Assignment - Complete the above function by writing the logic only name if age parametr has no value provided
//and print both if name and age is provided

function displayData(name:String, age?:number){
    if(age == undefined){
        console.log(name)
    }
    else{
        console.log(name, age)
    }
    
}

displayData("Rohan")
displayData("Rohan", 30)