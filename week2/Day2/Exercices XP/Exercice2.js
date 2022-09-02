/*
---------------------------------------------------Exercise 2------------------------------------
Chihuahua
Instructions
Create a variable called newDog where it’s value is “Chihuahua”.
Check and display how many letters are in newDog.
Display the newDog variable in uppercase and then in lowercase 
(no need to create new variables, just console.log twice).
Check if the variable newDog is equal to “Chihuahua”
if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
else, console.log ‘I dont care, I prefer cats’
*/

let newDog = "Chihuahua";
console.log(newDog.length)
let x = 0;
for (let i = 0; i < newDog.length; i++) {
    if (newDog.charAt(i) != null) {
        x = x++;
    }

}
console.log(x)
console.log(newDog.toUpperCase())
console.log(newDog.toLocaleLowerCase())

if (newDog == "Chihuahua") {
    console.log("J’adore les chihuahuas, c’est ma race de chien préférée ")
} else {
    console.log("Je m’en fiche, je préfère les chats ")
}