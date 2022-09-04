/*
----------------------------------- Exercise 2 : Your Favorite Colors-------------------------------------------------
Instructions
Create an array called colors where the value is a list of your five favorite colors.
Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
Hint : create an array of suffixes to do the Bonus
*/

let colors = ["Vert", "Jaune", "Rose", "Orange", "Bleue"];
for (let i in colors) {
    if (colors[i] == "Vert") {
        console.log("Mon choix N°1 est le" + " " + colors[i])
    } else if (colors[i] == "Orange") {
        console.log("Mon choix N°2 est le" + " " + colors[i])
    } else if (colors[i] == "Jaune") {
        console.log("Mon choix N°3 est le" + " " + colors[i])
    } else if (colors[i] == "Rose") {
        console.log("Mon choix N°4 est le" + " " + colors[i])
    } else {
        console.log("Mon choix N°5 est le" + " " + colors[i])
    }
}