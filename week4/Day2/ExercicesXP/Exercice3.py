print("-------------------------LES LISTES---------------------------")

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print("Supprimez « Banana » de la liste")
basket.remove("Banana")
print(basket)
print("Supprimez « Blueberries » de la liste.")
basket.remove("Blueberries")
print(basket)
print("Ajoutez « Kiwi » à la fin de la liste.")
basket.append("Kiwi")
print(basket)
print("Ajoutez « Pommes » au début de la liste.")
basket.insert(0,"Apples")
print(basket)
print("Comptez combien de pommes sont dans le panier.")
pom=0
for nb in basket:
    if nb == "Apples":
        pom=pom+1
print("il ya :",pom,"Pommes dans la liste")

print("Videz le panier.")
for rem in basket:
    basket.remove(rem)
print(basket)