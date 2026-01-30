let score  = 85;
if (scrore >=90) {
    console.log("Garde A");
}else if(scrore >= 80 ){
    console.log("Garde B");
}
else if(scrore >= 70 ){
    console.log("Garde C");
}
else if(scrore >= 60 ){
    console.log("Garde d");

}
else{
    console.log("Fail");
}

//comment in javascript
/*
This is a multi-comment
it can span multiple line.
useful for detailed explanation
*/

// Using Prompt and alert in javascript

function askName(){
    let name = prompt('What is your name?');
    alert("Hello", + name + "!") 
}
let name = "merina"
let age = 28;
console.log("Age" , age)
let  sum = age +10
console.log("Sum", sum);

let day = 3
let dayName;
switch(day){
    case 1:
        dayName = "Monday";
        break;
        case 2:
        dayName = "Tuesday";
        break;
        case 3:
        dayName = "Wednesday";
        break;
        case 4:
        dayName = "Thursday";
        break;
        case 5:
        dayName = "Friday";
        break;
        case 6:
        dayName = "Saturday";
        break;
        case 7:
        dayName = "Sunday";
        break;
        default :"Invalid"        
}


for (let i = 0; i <= 5; i++) {
  console.log(i);
}

let fruits = ['Apple', "Banana", "Cherry"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    
} 
let numbers = [1,2,3,4,5]
let sum5 = 0;
for (let i = 0; i < numbers.length; i++) {
   sum5  += numbers
    
}

console.log("sum", sum );

// while loop
let i =1;
while (i <=5) {
  console.log(i);
}
let j = 1
do{
  console.log(j);
  j++
}while (j<=10) {
  console.log(j);
}

//Break and Continue

for (let i = 0; i <=10; i++) {
  if (i == 8) {
    continue
  }
  if (i == 8) {
    break
  }
  console.log(i);
}

// Defining and Calling Function
function add(a,b) {
  return a +b
}
let recieve = add(40,40);
console.log(recieve);

function isEven(number) {
  if (number % 2 == 0) {
    return true
  }else{
    return false
  }
}
let result = isEven(4);
console.log("IS 4 even", result);



// Recipe analogy: You define a recipe first, then use it later
function makeSandwich(bread, filling) {
  return bread + " with " + filling;
}

// Using the recipe
let lunch = makeSandwich("Wheat", "Turkey");
console.log(lunch); // "Wheat with Turkey"

// Function Expression
// Recipe analogy: Writing down a recipe and putting it in a box
const makeCoffee = function(type) {
  return "Brewing " + type + " coffee";
};

let morningCoffee = makeCoffee("espresso");
console.log(morningCoffee); // "Brewing espresso coffee"

// Example
const welcome3 = function(name) {
  console.log('Hello ' + name + "!");
};

welcome3("Alice"); // "Hello Alice!"

// Note: You had "greet" but defined "welcome"
 // function and argument

 function multiply(a,b) {
  return a *b
 }
let outcome = multiply(4,6)
console.log("Product", outcome);
 

//Arrow Function
const difference = (a,b) => {
  return a-b
}
let sum2 = difference(10,5)
console.log("sum:", sum2 );

const Product = (a,b) => a* b


let together = Product(10,5)
console.log("Product:", together);

// . Anonymous Function (Function without a name)

// Recipe analogy: A temporary cooking method you use once
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

// LOcal and Global Variable

// GLOBAL: Like school rules - everyone knows them
let schoolName = "JavaScript High School";

function showClass(classRoom) {
    // LOCAL: Like class rules - only known in this class
    let className = "Room " + classRoom;
    console.log(schoolName + " - " + className);
}

showClass("101"); // Works fine
console.log(schoolName); // Works - global variable
// console.log(className); // ERROR! Local variable not accessible outside

showLocalVar(locaVAr)

// manipulating Array items
let fruitsjsjs = ['apple', 'Mango', 'Banana', 'Grape'];

// Add to end (like adding item to shopping list)
fruits.push('Date');
console.log(fruitsjsjs); // ['apple', 'Mango', 'Banana', 'Grape', 'Date']

// Remove from end (like removing last item)
fruits.pop();
console.log(fruitsjsjs); // ['apple', 'Mango', 'Banana', 'Grape']

// Remove from beginning
fruits.shift();
console.log(fruitsjsjs); // ['Mango', 'Banana', 'Grape']

// Add to beginning
fruits.unshift('Orange');
console.log(fruitsjsjs); // ['Orange', 'Mango', 'Banana', 'Grape']


//working with JSON
// JSON is like a standardized form for data exchange.

// JSON STRING (like data in an envelope)
const jsonString = '{"name":"Smith", "age":25, "city":"NetherLand"}';

// Convert to JavaScript object (open the envelope)
const user = JSON.parse(jsonString);
console.log(user); // {name: 'Smith', age: 25, city: 'NetherLand'}

// Access data
console.log(`Name: ${user.name}, Age: ${user.age}`); // "Name: Smith, Age: 25"

// Convert object to JSON (put data in envelope)
const product = {
    id: 1,
    name: "Laptop",
    price: 799.99
};
const productJSON = JSON.stringify(product);
console.log(productJSON); // '{"id":1,"name":"Laptop","price":799.99}'


// Array Methods (Higher Order Functions)
// forEach - Do something with each item

const students = ["Alice", "Bob", "Charlie"];
students.forEach(student => {
    console.log("Hello " + student);
});

// Output: Hello Alice, Hello Bob, Hello Charlie

// Example
const grades = [85, 90, 78];
const adjustedGrades = grades.map(grade => grade + 5);
console.log(adjustedGrades); // [90, 95, 83]

const okay = [1, 2, 3, 4, 5, 6];
const evenNumbers = okay.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]
// promise


// find - Find first matching item

const inventory = [
  {name: "apple", quantity: 5},
  {name: "banana", quantity: 2},
  {name: "orange", quantity: 8}
];
const lowStock = inventory.find(item => item.quantity < 3);
console.log(lowStock); // {name: "banana", quantity: 2}

const promise = new Promise((resolve, reject) =>{

setTimeout(()=>{
  resolve("Promise resolved")
},2000)

promise.then((result)=>{
  console.log(result);
  
})
});

// using try and Catch

try {
  const result = 10/10
  console.log("Result", result);
  
} catch (error) {
  console.log('An error occured',error);
  
}finally {
  console.log('Executing finally block');
  
}

// What is DOM? (Document Object Model)

// DOM is like a family tree of your HTML page. Every HTML element is a "node" in this tree that you can access and manipulate with JavaScript.

// Real-World Analogy: Think of a web page as a house blueprint:

//     HTML = The blueprint (structure)

//     CSS = The paint and decorations (style)

//     DOM = The interactive model you can rearrange

//     JavaScript = The contractor who makes changes

// <!-- Example HTML Structure -->
// <!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <div id="container">
        <h1>Welcome</h1>
        <p class="intro">Hello World!</p>
        <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
</body>
</html>

// document
// ├── html
// │   ├── head
// │   │   └── title
// │   └── body
// │       └── div#container
// │           ├── h1
// │           ├── p.intro
// │           └── ul#list
// │               ├── li
// │               └── li

// Single Element Selectors

// Get element by ID (returns single element)
const header = document.getElementById('header');
console.log(header);

// Query Selector (CSS-style selector)
const main = document.querySelector('#main'); // By ID
const firstPara = document.querySelector('p'); // First p tag
const special = document.querySelector('.special'); // By class

// Multiple Element Selectors

// Get elements by class name (returns collection)
const buttons = document.getElementsByClassName('btn');
console.log(buttons); // HTMLCollection

// Get elements by tag name
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// Query Selector All (most flexible)
const allDivs = document.querySelectorAll('div');
const listItems = document.querySelectorAll('ul li');


// Real-World Example: Form Validation


// Select form elements
const form = document.querySelector('#signup-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');


// Validate on submit
form.addEventListener('submit', function(event) {
    if(emailInput.value === '') {
        alert('Please enter email!');
        event.preventDefault(); // Stop form submission
    }
});


// Creating Single Elements

// Create a new paragraph
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph!';
newParagraph.className = 'highlight';
newParagraph.id = 'para1';

// Create with attributes
const link = document.createElement('a');
link.href = 'https://example.com';
link.target = '_blank';
link.textContent = 'Visit Site';


// Creating Multiple Elements with Loops


// Create a list with 5 items
const ul = document.createElement('ul');
ul.id = 'dynamic-list';

for(let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    li.className = 'list-item';
    li.dataset.index = i; // Custom data attribute
    
    // Add click event
    li.addEventListener('click', function() {
        console.log(`Clicked item ${i}`);
    });
    
    ul.appendChild(li);
}

// Add to page
document.body.appendChild(ul);


// Modifying Attributes

const image = document.querySelector('img');

// Set attributes
image.setAttribute('src', 'new-image.jpg');
image.setAttribute('alt', 'Description of image');

// Get attributes
const src = image.getAttribute('src');
console.log('Image source:', src);

// Remove attribute
image.removeAttribute('alt');

// Toggle attribute (useful for classes)
const button = document.querySelector('button');
button.classList.toggle('active'); // Adds if missing, removes if present


// Dataset attributes (custom data-* attributes)
const userDiv = document.querySelector('.user');
userDiv.dataset.userId = '12345';
userDiv.dataset.userRole = 'admin';

console.log(userDiv.dataset.userId); // '12345'



// Understanding Destructuring

// Destructuring is like unpacking a suitcase - you take items out and put them into separate variables.
// Real-World Analogy:

//     Array = A packed suitcase where items are in order

//     Object = A labeled toolbox where each tool has a specific place

//     Destructuring = Taking items out and giving them names

// Basic Array Destructuring

// Traditional way
const numbers = [10, 20, 30];
const first = numbers[0];
const second = numbers[1];
console.log(first, second); // 10 20

// Destructuring way (much cleaner!)
const [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree); // 10 20 30


// Real-World Example: Student Grades


// Student test scores
const studentScores = [85, 92, 78, 95, 88];

// Destructure first three scores
const [firstTest, secondTest, thirdTest] = studentScores;
console.log(`Test 1: ${firstTest}, Test 2: ${secondTest}`); // Test 1: 85, Test 2: 92

// Skip middle scores
const [quiz1, , quiz3] = studentScores; // Skip index 1
console.log(`Quiz 1: ${quiz1}, Quiz 3: ${quiz3}`); // Quiz 1: 85, Quiz 3: 78

// Get first and collect rest
const [midterm, ...finalExams] = studentScores;
console.log(`Midterm: ${midterm}`); // Midterm: 85
console.log(`Finals:`, finalExams); // Finals: [92, 78, 95, 88]



// Default Values (Prevent Undefined)

const colors = ['red', 'blue'];

// Without default
const [primary, secondary, tertiary] = colors;
console.log(tertiary); // undefined 😕

// With default values
const [mainColor = 'red', accentColor = 'blue', highlightColor = 'yellow'] = colors;
console.log(highlightColor); // 'yellow' (uses default) 😊

// Real example: User preferences
const userSettings = ['light', 'english'];
const [theme = 'dark', language = 'english', fontSize = 'medium'] = userSettings;
console.log(`Theme: ${theme}, Font: ${fontSize}`); // Theme: light, Font: medium


// Swapping Variables (No Temp Variable Needed!)

// Old way
let a = 5;
let b = 10;
let temp = a;
a = b;
b = temp;
console.log(a, b); // 10 5

// Destructuring way (magic!)
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(x, y); // 10 5

// Real example: Swap student positions
let firstStudent = 'Alice';
let secondStudent = 'Bob';
[firstStudent, secondStudent] = [secondStudent, firstStudent];
console.log(`First: ${firstStudent}, Second: ${secondStudent}`); // First: Bob, Second: Alice




// Regex Quick Reference Cheat Sheet
// Character Classes:

//     [abc] - Match a, b, or c

//     [a-z] - Match any lowercase letter

//     [A-Z] - Match any uppercase letter

//     [0-9] - Match any digit

//     [^abc] - Match anything EXCEPT a, b, c

//     . - Match any single character (except newline)

// Predefined Classes:

//     \d - Any digit (0-9)

//     \D - Any NON-digit

//     \w - Any word character (a-z, A-Z, 0-9, _)

//     \W - Any NON-word character

//     \s - Any whitespace (space, tab, newline)

//     \S - Any NON-whitespace

// Quantifiers:

//     ? - 0 or 1 time (optional)

//     * - 0 or more times

//     + - 1 or more times

//     {n} - Exactly n times

//     {n,} - n or more times

//     {n,m} - Between n and m times

// Anchors:

//     ^ - Start of string

//     $ - End of string

//     \b - Word boundary


// Groups & Alternation:

//     (abc) - Group

//     (?:abc) - Non-capturing group

//     a|b - Match a OR b

// Flags:

//     g - Global (find all matches)

//     i - Case insensitive

//     m - Multiline mode

// Exact Match
// Simple text search
const text = "Hello World";
const pattern1 = /World/;  // Looks for "World"
console.log(pattern1.test(text)); // true

// This is like searching in a word processor with "Find"

// 1. Character Classes: [ ]

// [abc] - Match any ONE of these characters

const pattern = /[abc]/;  // Match a, b, OR c
console.log(pattern.test("apple"));  // true (has 'a')
console.log(pattern.test("dog"));    // true (has 'd'? NO! false)
console.log(pattern.test("cat"));    // true (has 'c')

// [a-z] - Match any lowercase letter
const pattern2 = /[a-z]/;  // Match any lowercase a through z
console.log(pattern2.test("Hello"));  // true (has 'e', 'l', 'l', 'o')
console.log(pattern2.test("123"));    // false (no letters)

// [A-Z] - Match any uppercase letter

const pattern3 = /[A-Z]/;  // Match any uppercase A through Z
console.log(pattern3.test("Hello"));  // true (has 'H')
console.log(pattern3.test("hello"));  // false (all lowercase)

// [0-9] - Match any digit
const patter4 = /[0-9]/;  // Match any digit 0 through 9
console.log(pattern4.test("Room 101"));  // true (has '1')
console.log(pattern4.test("One Two"));   // false (no digits)

// [a-zA-Z] - Match any letter (upper or lowercase)

const pattern5 = /[a-zA-Z]/;  // Match any letter
console.log(pattern5.test("123"));      // false
console.log(pattern5.test("Hello123")); // true (has letters)

// \D - Match any NON-digit (opposite of \d)

const pattern6 = /\D/;  // Find anything NOT a digit
console.log(pattern6.test("123"));      // false
console.log(pattern6.test("123abc"));   // true (has 'a')

// \w - Match any word character
const pattern7 = /\w/;  // Matches: a-z, A-Z, 0-9, and underscore (_)
console.log(pattern7.test("Hello_123"));  // true
console.log(pattern7.test("#@!$%"));      // false

// \W - Match any NON-word character

const pattern8 = /\W/;  // Matches: NOT a-z, A-Z, 0-9, _
console.log(pattern8.test("Hello"));     // false
console.log(pattern8.test("Hello!"));    // true (has '!')

// \s - Match any whitespace
const pattern9 = /\s/;  // Matches: spaces, tabs, newlines
console.log(pattern9.test("Hello World"));  // true (space between)

// \S - Match any NON-whitespace
const pattern10 = /\S/;  // Matches: anything NOT whitespace
console.log(pattern10.test("   "));       // false (only spaces)
console.log(pattern10.test("  A  "));     // true (has 'A')

// ^ - Start of string

// ^ means "starts with"
const pattern11 = /^Hello/;
console.log(pattern11.test("Hello World"));  // true
console.log(pattern11.test("World Hello"));  // false

// $ - End of string
// $ means "ends with"
const pattern12 = /World$/;
console.log(pattern12.test("Hello World"));  // true
console.log(pattern12.test("World Hello"));  // false

const pattern13 = /^Hello World$/;  // Must be exactly "Hello World"
console.log(pattern13.test("Hello World"));      // true
console.log(pattern13.test("Hello World!!!"));   // false
console.log(pattern13.test("Hello World"));  // false


// ? - Zero or One (Optional)
// ? means "optional - appears 0 or 1 time"
const pattern14 = /colou?r/;  // u is optional
console.log(pattern14.test("color"));   // true (American)
console.log(pattern14.test("colour"));  // true (British)

// * - Zero or More
// * means "0 or more times"
const pattern15 = /go*gle/;
console.log(pattern15.test("ggle"));    // true (0 'o's)
console.log(pattern15.test("google"));  // true (2 'o's)
console.log(pattern15.test("goooooogle")); // true (many 'o's)

// + - One or More
// + means "1 or more times"
const pattern16 = /go+gle/;
console.log(pattern16.test("ggle"));    // false (0 'o's)
console.log(pattern16.test("google"));  // true (2 'o's)

// {n} - Exactly n times

// {3} means "exactly 3 times"
// const pattern = /\d{3}/;  // Exactly 3 digits
// console.log(pattern.test("123"));     // true
// console.log(pattern.test("12"));      // false
// console.log(pattern.test("1234"));    // true (contains 123)

// {n,} - n or more times
// {3,} means "3 or more times"
const pattern17 = /\d{3,}/;
console.log(pattern17.test("12"));      // false
console.log(pattern17.test("123"));     // true
console.log(pattern17.test("123456"));  // true

// {n,m} - Between n and m times
// {2,4} means "between 2 and 4 times"
const pattern18 = /\d{2,4}/;
console.log(pattern18.test("1"));      // false
console.log(pattern18.test("12"));     // true
console.log(pattern18.test("1234"));   // true
console.log(pattern18.test("12345"));  // true (contains 1234)

// ( ) - Grouping
// Group parts of pattern
const pattern19 = /(abc)+/;  // Match "abc" one or more times
console.log(pattern19.test("abc"));        // true
console.log(pattern19.test("abcabc"));     // true

// | - OR operator
// | means "or"
const pattern20 = /cat|dog/;
console.log(pattern20.test("I have a cat"));  // true
console.log(pattern20.test("I have a dog"));  // true
console.log(pattern20.test("I have a bird")); // false

// Part 3: Regex Flags
// Flags modify how the regex works. They go after the closing /.

// g - Global (Find All Matches)

// Without g - finds first match only
const text123 = "cat cat cat";
const pattern100 = /cat/;
console.log(text.match(pattern100));  // ["cat"] (only first)

// With g - finds ALL matches
const pattern200 = /cat/g;
console.log(text.match(pattern200));  // ["cat", "cat", "cat"] (all!)

// i - Case Insensitive
const pattern111 = /hello/;
console.log(pattern111.test("Hello"));  // false (case sensitive)

const pattern300 = /hello/i;
console.log(pattern300.test("Hello"));  // true
console.log(pattern300.test("HELLO"));  // true
console.log(pattern300.test("hElLo"));  // true

// m - Multiline

const text99 = `First line
Second line
Third line`;

// Without m - ^ matches only start of entire string
const pattern99 = /^Second/m;
console.log(pattern1.test(text));  // true

// Without m - $ matches only end of entire string
const pattern991 = /line$/m;
console.log(text.match(/line$/gm));  // ["line", "line", "line"]