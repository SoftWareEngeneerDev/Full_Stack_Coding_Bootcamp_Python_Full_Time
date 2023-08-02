let nom = document.getElementById('noun')
let adjectif = document.getElementById('adjective')
let personne = document.getElementById('person')
let verbe = document.getElementById('verb')
let place = document.getElementById('place')

let form = document.getElementById('libform')
let button = document.getElementById('lib-button')

let storySpan = document.getElementById('story')

button.addEventListener('click', MadLibsGame)

const shuffleButton = document.getElementById("shuffle-button");
shuffleButton.addEventListener("click", MadLibsGame);

function MadLibsGame(e) {
    e.preventDefault();
    let nomH = nom.value;
    let adjectifH = adjectif.value;
    let personneH = personne.value;
    let verbeH = verbe.value;
    let placeH = place.value;
    if (nomH === "" || adjectifH === "" || personneH === "" || verbeH === "" || placeH === "") {
        alert("SVP! remplissez tout les champs du formulaire")
        return
    }
    let histoire = story = `Once upon a time, there was a ${personneH} ${nomH} named ${personneH}. ${personneH} loved to ${verbeH} in ${placeH}.`;

    storySpan.textContent = histoire
}