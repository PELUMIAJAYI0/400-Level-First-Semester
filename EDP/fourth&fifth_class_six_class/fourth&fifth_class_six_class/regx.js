🔍 Part 2: Basic Regex Syntax
Literals - Exact Match
javascript

// Simple text search
const text = "Hello World";
const pattern = /World/;  // Looks for "World"
console.log(pattern.test(text)); // true

// This is like searching in a word processor with "Find"

Special Characters - The Building Blocks
1. Character Classes: [ ]
[abc] - Match any ONE of these characters
javascript

const pattern = /[abc]/;  // Match a, b, OR c
console.log(pattern.test("apple"));  // true (has 'a')
console.log(pattern.test("dog"));    // true (has 'd'? NO! false)
console.log(pattern.test("cat"));    // true (has 'c')

[a-z] - Match any lowercase letter
javascript

const pattern = /[a-z]/;  // Match any lowercase a through z
console.log(pattern.test("Hello"));  // true (has 'e', 'l', 'l', 'o')
console.log(pattern.test("123"));    // false (no letters)

[A-Z] - Match any uppercase letter
javascript

const pattern = /[A-Z]/;  // Match any uppercase A through Z
console.log(pattern.test("Hello"));  // true (has 'H')
console.log(pattern.test("hello"));  // false (all lowercase)

[0-9] - Match any digit
javascript

const pattern = /[0-9]/;  // Match any digit 0 through 9
console.log(pattern.test("Room 101"));  // true (has '1')
console.log(pattern.test("One Two"));   // false (no digits)

[a-zA-Z] - Match any letter (upper or lowercase)
javascript

const pattern = /[a-zA-Z]/;  // Match any letter
console.log(pattern.test("123"));      // false
console.log(pattern.test("Hello123")); // true (has letters)

[^abc] - Match anything EXCEPT these characters
javascript

const pattern = /[^abc]/;  // Match anything NOT a, b, or c
console.log(pattern.test("apple"));  // true (has 'p', 'l', 'e')
console.log(pattern.test("abc"));    // false (only has a,b,c)

2. Predefined Character Classes
\d - Match any digit (same as [0-9])
javascript

const pattern = /\d/;  // Find any digit
console.log(pattern.test("Call at 555-1234"));  // true (has '5')
console.log("My number: 123".match(/\d/g));     // ["1", "2", "3"]

D - Match any NON-digit (opposite of \d)
javascript

const pattern = /\D/;  // Find anything NOT a digit
console.log(pattern.test("123"));      // false
console.log(pattern.test("123abc"));   // true (has 'a')

\w - Match any word character
javascript

const pattern = /\w/;  // Matches: a-z, A-Z, 0-9, and underscore (_)
console.log(pattern.test("Hello_123"));  // true
console.log(pattern.test("#@!$%"));      // false

What \w includes:

    All letters (a-z, A-Z)

    All digits (0-9)

    Underscore (_)

What \w excludes:

    Spaces

    Punctuation (!@#$%^&*)

    Special characters

\W - Match any NON-word character
javascript

const pattern = /\W/;  // Matches: NOT a-z, A-Z, 0-9, _
console.log(pattern.test("Hello"));     // false
console.log(pattern.test("Hello!"));    // true (has '!')

\s - Match any whitespace
javascript

const pattern = /\s/;  // Matches: spaces, tabs, newlines
console.log(pattern.test("Hello World"));  // true (space between)

\S - Match any NON-whitespace
javascript

const pattern = /\S/;  // Matches: anything NOT whitespace
console.log(pattern.test("   "));       // false (only spaces)
console.log(pattern.test("  A  "));     // true (has 'A')

3. Anchors - Position Matchers
^ - Start of string
javascript

// ^ means "starts with"
const pattern = /^Hello/;
console.log(pattern.test("Hello World"));  // true
console.log(pattern.test("World Hello"));  // false

$ - End of string
javascript

// $ means "ends with"
const pattern = /World$/;
console.log(pattern.test("Hello World"));  // true
console.log(pattern.test("World Hello"));  // false

Combining ^ and $ for exact matches:
javascript

const pattern = /^Hello World$/;  // Must be exactly "Hello World"
console.log(pattern.test("Hello World"));      // true
console.log(pattern.test("Hello World!!!"));   // false
console.log(pattern.test("  Hello World  "));  // false

4. Quantifiers - How Many Times?
? - Zero or One (Optional)
javascript

// ? means "optional - appears 0 or 1 time"
const pattern = /colou?r/;  // u is optional
console.log(pattern.test("color"));   // true (American)
console.log(pattern.test("colour"));  // true (British)

* - Zero or More
javascript

// * means "0 or more times"
const pattern = /go*gle/;
console.log(pattern.test("ggle"));    // true (0 'o's)
console.log(pattern.test("google"));  // true (2 'o's)
console.log(pattern.test("goooooogle")); // true (many 'o's)

+ - One or More
javascript

// + means "1 or more times"
const pattern = /go+gle/;
console.log(pattern.test("ggle"));    // false (0 'o's)
console.log(pattern.test("google"));  // true (2 'o's)

{n} - Exactly n times
javascript

// {3} means "exactly 3 times"
const pattern = /\d{3}/;  // Exactly 3 digits
console.log(pattern.test("123"));     // true
console.log(pattern.test("12"));      // false
console.log(pattern.test("1234"));    // true (contains 123)

{n,} - n or more times
javascript

// {3,} means "3 or more times"
const pattern = /\d{3,}/;
console.log(pattern.test("12"));      // false
console.log(pattern.test("123"));     // true
console.log(pattern.test("123456"));  // true

{n,m} - Between n and m times
javascript

// {2,4} means "between 2 and 4 times"
const pattern = /\d{2,4}/;
console.log(pattern.test("1"));      // false
console.log(pattern.test("12"));     // true
console.log(pattern.test("1234"));   // true
console.log(pattern.test("12345"));  // true (contains 1234)

5. Groups and Alternation
( ) - Grouping
javascript

// Group parts of pattern
const pattern = /(abc)+/;  // Match "abc" one or more times
console.log(pattern.test("abc"));        // true
console.log(pattern.test("abcabc"));     // true

| - OR operator
javascript

// | means "or"
const pattern = /cat|dog/;
console.log(pattern.test("I have a cat"));  // true
console.log(pattern.test("I have a dog"));  // true
console.log(pattern.test("I have a bird")); // false

🚩 Part 3: Regex Flags

Flags modify how the regex works. They go after the closing /.
g - Global (Find All Matches)
javascript

// Without g - finds first match only
const text = "cat cat cat";
const pattern1 = /cat/;
console.log(text.match(pattern1));  // ["cat"] (only first)

// With g - finds ALL matches
const pattern2 = /cat/g;
console.log(text.match(pattern2));  // ["cat", "cat", "cat"] (all!)

i - Case Insensitive
javascript

const pattern1 = /hello/;
console.log(pattern1.test("Hello"));  // false (case sensitive)

const pattern2 = /hello/i;
console.log(pattern2.test("Hello"));  // true
console.log(pattern2.test("HELLO"));  // true
console.log(pattern2.test("hElLo"));  // true

m - Multiline
javascript

const text = `First line
Second line
Third line`;

// Without m - ^ matches only start of entire string
const pattern1 = /^Second/m;
console.log(pattern1.test(text));  // true

// Without m - $ matches only end of entire string
const pattern2 = /line$/m;
console.log(text.match(/line$/gm));  // ["line", "line", "line"]

Combining Flags
javascript

const pattern = /hello/gi;  // Global + Case Insensitive
const text = "Hello HELLO hello";
console.log(text.match(pattern));  // ["Hello", "HELLO", "hello"]

🎯 Part 4: Common Real-World Patterns
Email Validation
javascript

// Simple email pattern
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Breakdown:
// ^                           - Start of string
// [a-zA-Z0-9._%+-]+          - Username (letters, digits, ._%+-)
// @                           - Literal @ symbol
// [a-zA-Z0-9.-]+             - Domain name
// \.                          - Literal dot (escaped with \)
// [a-zA-Z]{2,}               - Top-level domain (2+ letters)
// $                           - End of string

console.log(emailPattern.test("john@example.com"));    // true
console.log(emailPattern.test("john.doe@company.co.uk")); // true
console.log(emailPattern.test("invalid@email"));       // false

Phone Number
javascript

// US Phone: (123) 456-7890 or 123-456-7890
const phonePattern = /^(\(\d{3}\)\s?|\d{3}[-.]?)?\d{3}[-.]?\d{4}$/;

console.log(phonePattern.test("123-456-7890"));    // true
console.log(phonePattern.test("(123) 456-7890"));  // true
console.log(phonePattern.test("1234567890"));      // true

Password Strength
javascript

// At least 8 chars, with uppercase, lowercase, number, special char
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Breakdown:
// ^                          - Start
// (?=.*[a-z])               - At least one lowercase
// (?=.*[A-Z])               - At least one uppercase
// (?=.*\d)                  - At least one digit
// (?=.*[@$!%*?&])           - At least one special char
// [A-Za-z\d@$!%*?&]{8,}     - Only these chars, 8+ times
// $                          - End

RL Pattern
javascript

const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

Date (MM/DD/YYYY)
javascript

const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;
console.log(datePattern.test("12/25/2023"));  // true
console.log(datePattern.test("13/25/2023"));  // false

🛠️ Part 5: Regex Methods in JavaScript
1. test() - Check if pattern exists
javascript

const pattern = /\d+/;
console.log(pattern.test("Hello123"));  // true
console.log(pattern.test("Hello"));     // false

2. exec() - Get detailed match info
javascript

const pattern = /\d+/g;
const text = "Order 123 for $456";
let match;

while ((match = pattern.exec(text)) !== null) {
    console.log(`Found ${match[0]} at index ${match.index}`);
}
// Found 123 at index 6
// Found 456 at index 14

3. match() - Extract matches
javascript

const text = "Call 555-1234 or 555-5678";
const pattern = /\d{3}-\d{4}/g;
console.log(text.match(pattern));  // ["555-1234", "555-5678"]

4. replace() - Replace matches
javascript

const text = "Hello World";
const pattern = /World/;
console.log(text.replace(pattern, "Universe"));  // "Hello Universe"

// With global flag
const text2 = "cat dog cat";
console.log(text2.replace(/cat/g, "bird"));  // "bird dog bird"

5. search() - Find position
javascript

const text = "Hello World";
console.log(text.search(/World/));  // 6 (position where found)
console.log(text.search(/Universe/)); // -1 (not found)