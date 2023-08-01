function calculateTip() {

    let billAmount = parseFloat(document.getElementById('billamt').value)
    let serviceQuality = parseFloat(document.getElementById('serviceQual').value)

    let numberOfPeople = parseInt(document.getElementById('peopleamt').value)
    if (billAmount === 0 || isNaN(billAmount)) {
        alert("Alert!!! Vous devez choisir la qualité du service.")
        return;
    }

    if (isNaN(numberOfPeople) || numberOfPeople < 1) {
        numberOfPeople = 1
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'

    }
    let total = (billAmount * serviceQuality) / numberOfPeople
    let parsElem = total.toFixed(2)

    let totalTipElem1 = document.getElementById('totalTip')
    totalTipElem1.style.display = 'block'
    let TipElem = document.getElementById('tip')
    TipElem.innerHTML = parsElem

}

let totalTipElem2 = document.getElementById('totalTip')
totalTipElem2.style.display = 'none'

let calculateElem = document.getElementById('calculate')
calculateElem.addEventListener('click', calculateTip)