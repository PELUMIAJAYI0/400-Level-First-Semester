// Object class

var man = {
    firstname: "Adebayo",
    lastname: "Smith",
    Age: 23,
    isMarried :true,
    hasPet :false
}
// Object Freeze meaning all changes are gone 
Object.freeze(man)
man.eyeColor = "blue"
man.thirdName = "flex"
console.log(man.lastname);

// You can delete date

delete man.hasPet
delete man.isMarried

// console.log(man);


//Template String
//"" '' ``
var text = "Hello world"
var newText = `Hello "world"`
console.log(newText);

var firstname = "John";
var lastname = "Cena"

var welcome = "welcome" + firstname + " " + lastname + "!"
var newWelcome = `Welcome ${firstname}, ${lastname}!`
console.log(welcome);

var price = 100
var vat = .25
var totalVat = `Total vat = ${price * vat}`
console.log(totalVat);


// string methods
// zero indexing
// 01234
var text = "Hello!"

console.log(text.charAt());
// To get the first letter
// To get an value you have to put the index position of the value

console.log(text.charAt(1));
console.log(text.at(3));
console.log(text[3]);


// You can alsoe use the  at method or text method
// Uppercase and lower case
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// slice string
var remove = "hellooooo"
console.log(remove.slice(3, 6))
console.log(remove.substring(3, 6))

// Array is useful when trying to create a list of Cars, Schools, colors,subject

var colosArray = ["red", "blue", "green", "yellow"]
console.log(colosArray)

colosArray[3]= "pink"
// we can push another array on item into our existing array
colosArray.push['black']
// You can also increase the array item you have by adding a new item
colosArray[5] = "acqua"
// You can also know the total number of items in your array
console.log(colosArray.length);
// To confirm if your array variable is truely array
console.log(Array.isArray(colosArray));

console.log(colosArray)


//Boolean is True or False , Yes or No

console.log(5 > 4);
console.log(15 > 4);
console.log(15 === 4);

// NaN means not a Number


// Comparison and logical operators
// === equal value and type
// ==   equal only value

// > greater than
// >= greate than equal to
// <= lessa than equal
{/* < less than */}
console.log(5===5);
console.log(5!=5);
console.log(5<5);
console.log(15<3);
console.log(10<=3);


console.log(5==4);
console.log(5=="4");


// Logical OPerators
// && And operator
//  || oprator
yy
console.log(true && true && false);
console.log(true || true || false);
console.log(!true);

console.log(!10> 1);

var emailExist = false
var PhoneNUmber = false
console.log(emailExist || PhoneNUmber);













