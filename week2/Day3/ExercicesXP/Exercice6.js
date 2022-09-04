/*
 * let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
Compte tenu de l’objet ci-dessus et en utilisant
 une for loop, console.log « mon nom est Rudolf le raindeer »
*/

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
let tab = []
for (let i in details) {
    tab.push(i);
}
console.log(tab[0] + " " + details.my + " " + tab[1] + " " + details.is + " " + tab[2] + " " + details.the)