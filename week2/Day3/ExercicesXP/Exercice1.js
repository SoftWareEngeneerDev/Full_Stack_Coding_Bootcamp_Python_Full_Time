//--------------------------------------Partie I - Examen Des Tableaux----------------------------//
//------------------------------------------------------------------------------------------------//
let people = ["Greg", "Mary", "Devon", "James"];
delete(people[0])
people[3] = "Jason"
people.push('KAGAMBEGA')
console.log(people.indexOf('Mary'))
let newPeople = people.slice(2, 5)
console.log(newPeople)
console.log(people.indexOf('Foo'))
let last = people.pop();
//-----------------------------------------END-----------------------------------------------------//


//-------------------------------------------Partie II - Boucles-----------------------------------//
for (let i in people) {
    console.log(people[i])
}

for (let i in people) {

    if (people[i] == "Jason") {
        console.log(people[i])
        break;
    }
}