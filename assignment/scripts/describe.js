// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a string variable called name and set it to Dane.
// Then we check if name is an exact match for Mary. 
// Since name, Dane, is not an exact match,
// we console.log the else statement value, 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret without an assigned value. We make a variable called code and set the value to 123 as a number. 
// We check if code is an exact match to 123. 123 is an exact match to 123.
// The value of secret is now 'super' and code is multiplied by 2 (123 * 2 = 246). Code is now 246.
// We check to see if code is now greater than 250, since 246 is less than 250, we console.log 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a boolean variable called isStudent and set it to true. We make two number variables called age and zip. Age is set to 34 as a number and zip is set to 55407 as a number.
// Then we check if both conditions are true. isStudent is an exact match for true but zip, 55407, is not greater than 80000.
// Then we check if either condition if isStudent is false or if age is less than 30. Both conditions are unmet due to isStudent set to true and age is 34. 
// Then we check if isStudent is an exact match to true, it is, and we console.log 'Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - let colorOne = 'red'; is set to red, but the instructions state to set to 'blue'.
// Should be let colorOne = 'blue';
// FIX - let colorTwo = 'blue'; is set to blue, but the instructions state to set to 'red'.
// Should be let colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - colorOne = 'purple'; now set to 'purple', but the instructions state both colorOne and colorTwo should be set to 'purple'.
// Should be colorOne = colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*

// FIX - time is set as a constant, const time = 4;, but the instructions state it is a variable. 
// Should be let time = 4;
let temp = 40;
const time = 4;

// FIX - the compound conditional || means either side can be true but the instructions state and, meaning both sides need to be true. 
// Should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

