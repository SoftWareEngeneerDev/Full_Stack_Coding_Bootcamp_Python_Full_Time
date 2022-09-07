//----------------------------Exercise 4 : Shopping List-----------------------------------------------------//
//------------------------------------------------------------------------------------------------------------//
let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    var somme = 0;
    for (let i = 0; i <= shoppingList.length; i++) {
        //console.log(shoppingList[i])
        for (let j in stock) {
            if (shoppingList[i] == j) {
                //console.log(prices[j])
                somme = somme + prices[j];
            }
        }
    }
    return somme;
}