/*
-------------------------------Exercice 5 : Qu’y A-T-Il Dans Mon Portefeuille ?--------------------------------------
---------------------------------------------------------------------------------------------------------------------
*/


function changeEnough(itemPrice, amountOfChange) {
    //for (let i = 0; i < amountOfChange.length; i++) {
    //console.log(amountOfChange[i])
    let quarter = amountOfChange[0] * 0.25;
    let dimes = amountOfChange[1] * 0.10;
    let nickel = amountOfChange[2] * 0.05;
    let penny = amountOfChange[3] * 0.01;

    let montTotal = quarter + dimes + nickel + penny;

    if (montTotal > itemPrice) {
        return true;
    } else {
        return false;
    }
}
console.log(changeEnough(14.11, [2, 100, 0, 0]))