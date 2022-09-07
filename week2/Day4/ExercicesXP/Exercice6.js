function hotelCost() {
    let nombresNuits = parseInt(prompt("Combien de nuits ouhaitez vous passé à l'hotel ? :"));
    while ((typeof(nombresNuits) != 'number') || nombresNuits == null) {
        let nombresNuits = parseInt(prompt("Combien de nuits ouhaitez vous passé à l'hotel ? :"));
    }

    let prix = nombresNuits * 140;
    return prix;
}

function rentalCarCost() {
    let nombresJours = parseInt(prompt("Combien de jours souhaitez vous loué la voiture ? :"));
    while ((typeof(nombresJours) != 'number') || nombresJours == null) {
        let nombresJours = parseInt(prompt("Combien de jours souhaitez vous loué la voiture ? :"));
    }

    if (nombresJours >= 10) {
        let reduction = nombresJours - ((nombresJours * 5) / 100);
        let prix = reduction * 40;
        return prix;
    } else {
        let prix = nombresJours * 40;
        return prix;
    }

}

function planeRideCost() {
    let destination = prompt("Quelle est votre destination ? :");
    while ((typeof(destination) != 'string') || destination == null) {
        let destination = prompt("Quelle est votre destination ? :");
    }
    if (destination == 'Londres') {
        return 183;
    } else if (destination == 'Paris') {
        return 220;
    } else {
        return 300;
    }
}

function totalVacationCost() {
    let coutTotal = planeRideCost() + rentalCarCost() + hotelCost();
    return coutTotal;
}

totalVacationCost()