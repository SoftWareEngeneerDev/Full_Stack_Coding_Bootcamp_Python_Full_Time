/*
----------------------------------Exercise 3------------------------- 
: Verbing
Instructions
Prompt the user for a string. It must be a verb.
If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
If the length of the string is less than 3, leave it unchanged.
Example:

  The string is : "swim" , your program should console.log : "swimming"
  The string is : "swimming", your program should console.log : "swimmingly"
  The string is : "go" your program should console.log : "go"
---------------------------------------------------------------------------------
*/
let verbe = prompt("Renseigner un verbe ici : In Englissh:", 'to can: for example');
let lastCaracter = verbe.substr(3, (verbe.length - 3));
if (verbe.length >= 3 && lastCaracter != "ing") {
    console.log(verbe.concat("ing"))
} else if (verbe.length >= 3 && lastCaracter == "ing") {
    console.log(verbe.concat('ly'))
} else {
    console.log(verbe)
}