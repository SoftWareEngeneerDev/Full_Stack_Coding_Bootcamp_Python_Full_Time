function createCalendar(year, month) {
    const monthNames = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    // Créer une instance de date pour le premier jour du mois
    const firstDayOfMonth = new Date(year, month - 1, 1);

    // Obtenir le jour de la semaine du premier jour du mois (0 = dimanche, 1 = lundi, ..., 6 = samedi)
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Obtenir le nombre de jours dans le mois
    const lastDayOfMonth = new Date(year, month, 0);
    const numberOfDaysInMonth = lastDayOfMonth.getDate();

    // Créer un tableau pour stocker les jours du mois
    const calendar = [];

    // Ajouter les en-têtes des jours de la semaine
    const daysOfWeek = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    calendar.push("<tr>" + daysOfWeek.map(day => `<th>${day}</th>`).join("") + "</tr>");

    // Remplir le tableau du calendrier avec les jours du mois
    let currentDay = 1;
    while (currentDay <= numberOfDaysInMonth) {
        calendar.push("<tr>");

        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            if (currentDay > numberOfDaysInMonth) {
                // Ajouter des cases vides après la fin du mois
                calendar.push("<td></td>");
            } else {
                // Ajouter le jour du mois
                calendar.push(`<td>${currentDay}</td>`);
            }

            if (dayOfWeek === 6) {
                // Si c'est dimanche, fermer la ligne
                calendar.push("</tr>");
            }

            currentDay++;
        }
    }

    return `
      <table>
        <caption>${monthNames[month - 1]} ${year}</caption>
        ${calendar.join("")}
      </table>
    `;
}

// Exemple d'utilisation:
const calendarHTML = createCalendar(2012, 2);
let calendar = document.getElementById('table')
calendar.innerHTML = calendarHTML
    //console.log(calendarHTML);