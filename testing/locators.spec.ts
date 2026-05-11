
//css selector
//xpath
// playwright getBy locators 


//****CSS selectors:
// 1. for id - # = id attribute  Syntax: #idvalue eg: #password
// use tagname#idvalue -- eg. input#password


//2. class attribute - . notatoon represents class element
// tagname.classname
//.classname.classname.classname -- if we have multiple class value seperated by space 


//3. css based on any attribute [attribute ='value']
// tagname[attribute = 'value'] --- for class attriobute you need to add the complete value 

// <label for='username'>Username</label> -- DOM
//label - tagname 
// for -  tagname
//Username - textvalue --- anything between the starting and ending tag 
//('text = Email')

// 4. Traversing from parent to child 

//parent tagname >> chiltagname or parentlocator childlocator --giving a space in between parent and child 

//---------------------------------------------------------
//XPATH: 
//Absolute xpath - / -  If there is any addition in the between the elements then locator will start failing
// relative xpath -  // - 
//xpath index will strat with 1 
//*[@attribute ='value'] for indexing (//*[@attribute ='value'])[1]
//tagname[@attribute = 'value']

//AXES -  xpath 

//For an immediate child --- //[@class= 'practice-form-wrapper']/h5
//for childrens inside the tag(not immediate but grand or great grand use //)
//   //[@class= 'practice-form-wrapper']//input --- any child with input 

//sibling
//label[@for = 'username']/following-sibling::input
//input[@id = 'username']/preceding-sibling::label

//div[text() = 'ABOUT']/following-sibling::a -- flipkart about links 
//div[@class= 'ykJuJZ'][1]/following-sibling::a

//li[contains(text(),"positive and negative")]

//tagname[@attribute = 'value']/parent::*  * represent * all (only 1 parent will be there)
//tagname[@attribute = 'value']/parent::tagname 

//tagname[@attribute = 'value']/ancestor::tagname 
//tagname/ancestor::tagname

//to write locators using css or xpath we use method page.locator(css/xpath vaslue)
//page.locator("#Login")