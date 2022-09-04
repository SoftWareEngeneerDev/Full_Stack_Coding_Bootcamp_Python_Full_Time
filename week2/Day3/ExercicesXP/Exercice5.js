/*
🌟 -----------------Exercice 5 : Famille-------------------------
Instructions
Créez un objet appelé famille avec quelques paires de valeurs clés.
À l’aide d’une boucle for in, console.log les clés de l’objet.
À l’aide d’une boucle for in, console.log les valeurs de l’objet.

*/
let famille = {
    moi: 'Aboubacar',
    papa: 60,
    maman: 55,
    grandFrere: 'Kagambega',
    petiteSoeur: 'Djamilatou'
}

for (let i in famille) {
    console.log(i)
}

for (let i in famille) {
    console.log(famille[i])
}