// loops --- for, while, do-while -- same block  {......}  of code multiple times umtil the condition fails or is false 

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("*****************************************")
for (let i = 1; i<=10;i++){
 console.log(i)
}

//for loop --- 3 types of for loop
//1. for loop -- traditional loop --- when we know how many times we need to run the same block of code  or iteration
//2.  for of loop --- loop through the iterable object like array, string 
//3. for in loop -- Loop through the properties of an object -{key:value} --  key - value 
/// while --- when we don't know that how many times we have iterate the block 
//do while --- we need to execute the loop atleast once before we check the condition //mostly not used 


for (let i = 5; i>=1; i--){
    console.log(i)
}

// if inside the loop allows break but only break within the if is not allowed in JS/TS


