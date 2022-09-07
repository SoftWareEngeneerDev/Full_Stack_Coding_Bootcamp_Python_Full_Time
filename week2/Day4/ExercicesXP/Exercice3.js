//-------------------------------- Exercice 3 : Trouver Les Nombres Divisibles Par 23-------------------------------
//------------------------------------------------------------------------------------------------------------------

function isDivisible() {
    for (let i = 0; i <= 500; i++) {
        if ((i % 23) == 0) {
            console.log(i)
            var sum = i;
            sum += sum;
        }
    }
    console.log("la valeur de la somme :" + sum)
}
isDivisible()