// function insertRow() {
//     //const i = 3
//     let tableElem = document.getElementById('sampleTable')
//     let trElem = document.createElement('tr')

//     let tdElem1 = document.createElement('td')
//     tdElem1.textContent = "Row1 cell1 ";
//     trElem.appendChild(tdElem1);


//     let tdElem2 = document.createElement('td')
//     tdElem2.textContent = 'Row1 cell2';
//     trElem.appendChild(tdElem2)

//     tableElem.appendChild(trElem)

//     //i++;
// }
// let button = document.getElementById('jsstyle')
// button.addEventListener('click', styleFonction)

// function styleFonction() {
//     this.style.backgroundColor = 'orange'
//     this.style.border = 'solid 2px orange'
// }

// let form = document.forms[0]
// alert(form.id)
// let elem = form.elements[0]
// alert(elem.innerHTML)



// JS Exercice1
// let form = document.forms.form1
// alert(form.id)
// let firstElem = form.elements.fname
// alert(firstElem.value)
// let secondElem = form.elements.lname
// alert(secondElem.value)
// 
// 
// JS Exercice2
let form = document.getElementById('select1')
    //Obtenez la valeur de la 2e option
let Valopt2 = form.options[1].selected = true
    //alert(Valopt2)
    //Ajouter une nouvelle option avec la valeur 'Travailler' à la fin du formulaire de sélection
let nouvOpt = document.createElement('option')
nouvOpt.value = 'Travailler'
nouvOpt.textContent = 'Travailler'
form.appendChild(nouvOpt)
    //Ajouter une nouvelle option avec la valeur 'Primary School' au début du formulaire de sélection
    // 
let nouvOpt1 = document.createElement('option')
nouvOpt1.value = 'Primary School'
nouvOpt1.textContent = 'Primary School'
form.insertBefore(nouvOpt1, form.firstChild)

form.value = 'banana'
alert(form.textContent)

let elemSelect = form.options[form.selectedIndex].textContent
alert(elemSelect)