/* 
------------------------------------Instructions-----------------------------------------------
Create 2 variables. The values should be strings. For example:
let str1 = "mix";
let str2 = "pod";


2. Slice out and swap the first 2 characters of the two strings from part 1.


3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).


4. Finally console.log the new concatenated string.

*/


let str1 = "mix";
let str2 = "pod";
let newWord1 = str2.replace('po', 'mi');
let newWord2 = str1.replace('mi', 'po');
let concat = newWord1.concat(' ', newWord2);

console.log(concat)