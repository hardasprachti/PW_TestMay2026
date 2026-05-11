
let age = 30 
let msg = "Your age is ${age}"
let msg1 = `Your age is ${age}` // use of backtick to pass the parameter 
console.log(msg)
console.log(msg1)

// 1. length -- do not use with () then this is the property of string that helps us return the total number of chars in a string 
// stringname.length

let str = "Welcome to TypeScript"
console.log(str.length)
console.log(str)
// check for multiline as well as \n line charracter 


// 2. charAt(index) - return the charater at a specified index 
console.log(str.charAt(0))

//abcdabcd -- a2b2c2d2  write the program to get the count of charaters are available inside string

// 3. concat(str1, str2) -- merges 2 or more string
//stringname.concat(str2,str3)
//4. includes(element, startindex?) - 
//stringname.includes("string or char", startindex) - return a boolean (true/false)

//5 indexOf(element, startIndex) -- Returns the index of the first occurance of substring
//Syntax: 
//arrayName.indexOf(char or string)

// 6. lastIndexOf(element, startindex?) last occurance of the substring 
//stringname.lastIndexOf(char or string)

//7.slice(startIndex?,endindex?) - returns the portion of string 
//Styntax: stringnmae.slice(startIndex,endIndex(exclusive)) 
let str3 = "This is a string"
console.log(str3.length)
console.log(str3.slice()) // prints complete string 
console.log(str3.slice(2,10))
console.log(str3.slice(5))
console.log(str3.slice(10,4)) // empty string is returned 

//What is differnce between slice and substring
// 8 substring(startIndex, endindex?) - returns portion of the string 
//Styntax: stringName.substring(startIndex(mandatory),endIndex(optional))
let str4 = "USD 1234" // get only the value of USD
console.log(str4.substring(2))
// start index and end index is mandatory in substring but not in slice. 
//if start > endIndex then slice will return empty value but substring will swap the values and print the values 
console.log(str3.substring(10,4))


//9. .startsWith(String, startindex?) - it checks if the string contains the specified string and return the boolean string
//str3 = "This is a string"
console.log(str3.startsWith("This"))//true
console.log(str3.startsWith("this"))//false as its case sensitive 
console.log(str3.startsWith("Uhis"))//false
console.log(str3.startsWith("t", 11))//true

//10. endWith(string, endindex?) - It checks if the string ends with the specigied string and return us boolean value
console.log(str3.endsWith("t", 11))//true
console.log(str3.endsWith("string"))//true

//11. toUpperCase() - It converts the string to upper case(capital) and returns a new string
//12. toLowerCase() - It converts the string to lower case(small) and returns a new string
console.log(str3)
console.log(str3.toUpperCase())
console.log(str3.toLowerCase())
console.log(str3)// does not change the orignal string 

//13. trim() -- deletes the start(leading) and end(trailing) spaces of the string 
let str5= "    this is the string     "
console.log(str5.length)
console.log(str5.trim())
console.log(str5.trim().length)

//14. trimStart() - removes whitespace from the beginning and not from end and returns the new string
console.log("username  " == "   username  ".trim())// false
console.log("username  " == "   username  ".trimStart())// true

//15. trimEnd() - removes whitespace from the ending and not from beginning and returns the new string
console.log("  username" == "  username  ".trimEnd())// true

//15. split(seperator) - splits the string into an Array of substring based on the specified seperator
console.log(str3.split(" "))
console.log(str3.split(" -"))// doesnot split

let str6= "Apple banana mango typescript JS Blue"
console.log(str6.split(" "))
console.log(str6.split("a"))
//print the domain name of the email below
let email = "praveen@qamitra.com"
console.log(email.split("@")[1])