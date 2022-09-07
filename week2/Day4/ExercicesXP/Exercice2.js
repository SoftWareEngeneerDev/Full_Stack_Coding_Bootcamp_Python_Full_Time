//------------------------------------------Conseils--------------------------------------------------------------//
//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - //
function calculateTip() {

    var montantFacture = prompt("John veillez entrer le montant de la facture:");

    if (montantFacture <= 50) {
        var pourboir = (montantFacture * 20) / 100;
        //console.log(pourboir)
    } else if (montantFacture > 50 && montantFacture <= 200) {
        var pourboir = (montantFacture * 15) / 100;
        //console.log(pourboir)
    } else {
        var pourboir = (montantFacture * 10) / 100;
        //console.log(pourboir)
    }
    var sommeTotale = montantFacture + pourboir;
    console.log("Le montant total de la facture et du pourboir est :" + " " + sommeTotale)
}
calculateTip()