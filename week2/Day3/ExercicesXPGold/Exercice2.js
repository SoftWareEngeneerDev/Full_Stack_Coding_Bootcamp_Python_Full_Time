/*
--------------------------------------Exercice 2 : Présence--------------------------------------------------------
*/

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}
let prenom = prompt("Quel est votre nom ? :");
//console.log(prenom)
if (prenom in guestList) {
    console.log("Hi! I'm " + " " + prenom + "," + "and I 'm from" + " " + guestList.prenom)
} else {
    console.log("Hi! I'm a guest.")
}