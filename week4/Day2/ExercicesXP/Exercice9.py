ages = []
reponse = input("Voullez vous entrez l'age d'une personne??? (OUI/NON) :")
while reponse == "oui" or reponse == "OUI":
    ages.append(int(input("Entrer l'age de la personne:")))
    reponse = input("Voullez vous entrez l'age d'une personne??? (OUI/NON) :")
    #reponse.lower()
print(ages)
prix = 0
for age in ages:
    #print(type(age))
    #type(age)
    #print("Vous avez "+age+"ans")

    if age < 3:
        prix = prix + 0
    elif age >= 3 and age <12:
        prix = prix + 10
    else:
        prix = prix + 15

print("Le coût total des billets est :",prix,"$")
print("---------------------------Partie II----------------------------------")
noms= ["Khalifa","Saibou","Levieux","Ousseni","Assane","Aboubacar","Sekou","Kone"]
for nom in noms:
    print(nom,"Entrer votre age pour la vérification: ")
    age = int(input("Entré votre age pour la vérification :"))
    if age >= 16 and age <= 21:
        print(nom,"Tu es autorisé à suivre le film")
    else:
        print(nom,"Tu n'est pas autorisé à suivre le film")
        noms.remove(nom)

print(noms)
