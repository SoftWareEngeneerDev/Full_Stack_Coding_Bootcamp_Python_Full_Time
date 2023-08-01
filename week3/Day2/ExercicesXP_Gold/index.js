let shoppingList = []

function addItem() {
    let elem = document.getElementById('inputItem')
    let val = elem.value.trim()
    if (val != '') {
        shoppingList.push(val)
        elem.value = ''
        updateList()
    }
}

function clearAll() {
    shoppingList = [];
    updateList();
}

function updateList() {
    let root = document.getElementById('root')
    root.innerHTML = ''

    let ulElem = document.createElement('ul')
    for (let item of shoppingList) {
        let liElem = document.createElement('li')
        liElem.textContent = item
        ulElem.appendChild(liElem)
    }
    root.appendChild(ulElem)
}


let input = document.createElement('input')
input.type = 'text'
input.id = 'inputItem'

let form = document.createElement('form')

let button1 = document.createElement('button')
button1.textContent = 'AddItem'
button1.addEventListener('click', addItem)
    //form.append(input, button)
let button2 = document.createElement('button')
button2.textContent = 'clearAll'
button2.addEventListener('click', clearAll)

form.appendChild(input)
form.appendChild(button1)
form.appendChild(button2)

let root = document.getElementById('root')
root.appendChild(form)