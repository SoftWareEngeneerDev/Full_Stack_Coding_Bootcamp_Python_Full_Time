/*
Exercice 7 : Groupe Secret
Instructions
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
Un groupe d’amis a décidé de créer une société secrète. Le nom de la société sera la première lettre de chacun de leurs noms triés par ordre alphabétique.
Astuce : une chaîne est un tableau de lettres
Console.log le nom de leur société secrète. La sortie doit être « ABJKPS »

*/

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

console.log(names[0][0].concat(names[1][0]).concat(names[2][0]).concat(names[3][0]).concat(names[4][0]).concat(names[5][0]))