// Arrays - [10,20,30,40,50]

let array = [10,3,5,6,12,"JS", true]// index starts with 0
// internally it gets stored in the key value pair {index:value}
// [0:10,1:3,2:5,------ 6:true]
// It can store multiple datatypes  inside it 


// it can be created in 2 ways
// 1. Using Array literal ---- [] declaring values in square bracket
//2.  Using new keyword 



















console.log("*****************Method of array***************")
console.log(array.length)
// push(ele1, ele2, ele3,.....)// Adds the element  to the end of the array

let arr2 = [10,20,"apple", "blue"]
arr2.push("black",true)
console.log(arr2)

console.log("____________________________")
arr2.push(array)
console.log(arr2)
console.log("____________________________")
console.log(arr2[6])
console.log("____________________________")
//pop() -- removes the last element from the array 
//Syntax: 
//arrayname.pop() --- does not accept any parameter 

const val = arr2.pop()
console.log(val)
console.log("After pop()", arr2)

//What is the difference between push() and unshift()

//Unshift(ele1,ele2,----) Adds the element at the beginning of the array 
// arrayname.unshift(ele1,ele2, ----)

arr2.unshift(60)
console.log("After unshift()",arr2)


// shift() --  Removes the first element from the array -- 
// every element will be shifted from its orignal index 
//arrayname.shift()
const val2 = arr2.shift()
console.log("After shift:" , arr2)

//What is differece between slice() and splice()
//slice(startIndex?, endIndex?)- both are optional parameters  -- Returns the portion of an array  

//Syntax: arrayname.slice(startIndex, endindex(exclusive))
//startIndex - The position where you want to srat the slice 
//endIndex -- The position where you want to end the slice 

console.log(arr2.slice(2,5))
console.log(arr2.slice())
console.log(arr2.slice(2,)) // from index 2 to the last 
//console.log(arr2.slice(5))
console.log(arr2.slice(7,2)) // Gives an empty array as you cannot traverse from right to left 
console.log("slice for reverse values", arr2.slice(-7,-2)) // but it will not reverse the array and nor will give the reverse values. it will always print from left to right.

//splice(startIndex, deleteCount?, element1, element2,------) ---- performs both operations addition and deletion at teh same time .. It changes the orignal array
//startIndex -- The position where you want to add or delete an element 
//deleteCount - The number of elements you want to be delete from the startindex
// ele1, ele2,,---- the element that you want to add at the starting index 

console.log("*********************")
let arr = [10,20,30,40,50,60,30]
console.log(arr)
arr.splice(2,0,15,25)
console.log(arr)
//console.log(arr[3])
arr.splice(1,2,15,25,30) // it will return the deleted elements 
console.log(arr)

//indexOf(element, startIndex) -- Returns the index of the first occurance of an  element in an array, or -1 if not found 
//Syntax: 
//arrayName.indexOf(element,startIndex?) 
const index = arr.indexOf(30)
console.log(arr)
console.log(index)

//Assignment: Find the index of first duplicate value in an array
//Find out all the index of 30 available in arr

//lastIndexOf(element, startindex?)
const lastInd = arr.lastIndexOf(30)
console.log(lastInd)


//concat(array2, array1) - It merges 2 or more arrays and return the new array 
let arr4  = [1,2,3]
let arr5 = ["10,", "JS"]
let arr6 =   arr4.concat(arr5)
console.log(arr6)


//join(seperator?) - join all the elements of the array and returns as a string 
//arrayname.join()
let arr7 = ["20", "11", "2026"] // dd-mm-yyyy or dd/mm/yyyy
const joinResult = arr7.join() // default it will use , as a seperator in a string
console.log(joinResult);
const joinResult1 = arr7.join("-")
console.log(joinResult1);
const joinResult2 = arr7.join("/")
console.log(joinResult2);


//toString() -- convert array to strings
console.log(arr7.toString())


//includes(element, startIndex?) Returns true if the elementis found in the array, otherwise false 
console.log(arr7.includes("2026"))
console.log(arr7.includes("2027"))
console.log(arr7.includes("20"))
console.log(arr7.includes("20", 1))// starts checking from the 1st index 

// string - str // string.includes(str)  