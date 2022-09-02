let c;
let a = 34;
let b = 21;

console.log(a + b) //first expression
    // Prediction: 55 parce les variables a=34 et b=21 sont des nombre donc 
    // Actual:55

a = 2;

console.log(a + b) //second expression
    // Prediction: 23 car la valeur de sera écrasé par la 2è instruction de a=2
    // Actual:23
console.log(3 + 4 + '5'); //affiche 75 car il aura une concatenation de valeur