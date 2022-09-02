/*
---------------------------------Instructions---------------------------------------------------
Prompt the user for a number and save it to a variable.
Check whether the variable is even or odd.
If it is even, display: “x is an even number”. Where x is the actual number the user chose.
If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
------------------------------------------------------------------------------------------------
*/
let number = prompt('Entrez  un nombre ici:');
console.log(number)

if ((number % 2) == 0) {
    console.log(number + " " + "Est un nombre paire ")
} else {
    console.log(number + " " + "Est nombre nombre impaire")
}