//-------------------------------------------🌟 Exercice 4 : Gestion Des Bâtiments---------------------------------//
//-----------------------------------------------------------------------------------------------------------------//

// 1  --Copiez et collez l’objet ci-dessus dans votre fichier Javascript.
let building = {
        numberOfFloors: 4,
        numberOfAptByFloor: {
            firstFloor: 3,
            secondFloor: 4,
            thirdFloor: 9,
            fourthFloor: 2,
        },
        nameOfTenants: ["Sarah", "Dan", "David"],
        numberOfRoomsAndRent: {
            sarah: [3, 990],
            dan: [4, 1000],
            david: [1, 500],
        },
    }
    //  2--Console.log le nombre d’étages dans le bâtiment.
console.log(building.numberOfFloors)

// 3-----Console.log combien d’appartements se trouvent aux étages 1 et 3.

console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)
    //4--Console.log le nom du deuxième locataire et le nombre de pièces qu’il a dans son appartement.

console.log(building.nameOfTenants[1] + ":" + building.numberOfRoomsAndRent.dan[0])

//5-Vérifiez si la somme du loyer de Sarah et David est plus
// importante que celle de Dan. Si c’est le cas, augmentez le loyer de Dan à 1200.

if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]) {
    let danLoyer = building.numberOfRoomsAndRent.dan[1] + 200;
    console.log(danLoyer)
}