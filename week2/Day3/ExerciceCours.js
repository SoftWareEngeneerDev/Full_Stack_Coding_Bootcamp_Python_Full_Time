let names = ["john", "sarah", 23, "Rudolf", 34];
for (let i in names) {
    if (typeof(names[i]) == "string") {
        //console.log(names[i])
        let firstCaracter = names[i][0];
        console.log(firstCaracter)
        let MajusMinus = firstCaracter.toUpperCase();
        console.log(MajusMinus)
        if (firstCaracter != MajusMinus) {
            names[i][0] = MajusMinus;
            console.log(names[i])
        }
    }
}
//console.log(names)