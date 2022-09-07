/*
-----------------------------------Exercice 3 : Jouer Avec Les Chiffres-------------------------------------
*/
let age = [20, 5, 12, 43, 98, 55]
let somme = 0
let max = age[0]
for (let i = 0; i < age.length; i++) {
    somme = somme + age[i]
    if (age[i] > max) {
        max = age[i]
    }
}

console.log("La somme de tout les éléments du tableau est :" + somme)
console.log("Le plus grand élément du tableau est :" + max)