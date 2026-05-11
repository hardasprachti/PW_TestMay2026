//Arithmetic Operators
//Comparison Operators
//Logical Operators
//Assignment Operators
//Ternary Operators

//1. Arithmetic operators:  mathematical operations
// Addition, Subtraction, Multiplication (*), Division (/), modulus(%) , 
// exponential (**) 5**3 --- 5 to the power of 3 
// incremental ++
//decremental --
let number1 = 10
let number2 = "4"

console.log(number1 + number2)
console.log(number1 / number2)
console.log(number1 ** number2)
console.log(number1 % number2)

//What is the difference between Type coecion and conversion?
//When JS/TS converts one datatype into another impliciltly its called type coercion
//When JS/TS converts one datatype into another explicitly its called type coercion Number("4")

//Increment operator 
//pre increment ++a
//post increment a++

console.log(++number1)
console.log(number1++)
console.log(number1)

//same with the decrement operator a-- and --a

//comparison operator:
// What is difference betwenn =, == , ===

//Equal to == ---- Check if the VALUES of the variable are same or not 
// Not equal to !=
//Strict equal to ===
//Strict not equal to !==

let num6= 10
let num7 = "10"

console.log(num6==num7) // true datatypes are differsnt but values are same so it will return true as a result

//Strict equal to (===) It checks if the VALUES and the DATATYPES of the variables are same or not
console.log(num6===num7);



//Logical operators
//AND && 
//OR ||
//NOT !

//Realtime use of logical operations -- calendar ----> Month Year--->Next -----> select  5th May 2027


//Assignment operator (=)
let i =100
i +=5 // i = 105

