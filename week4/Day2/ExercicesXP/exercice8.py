garnitures =[]
garniture = input("Entrer le nom d'une garniture de pizza: ")
while garniture != "quitter":
    print("Vous avez ajouter "+garniture+" garniture à la pizza")
    garnitures.append(garniture)
    garniture = input("Entrer le nom d'une garniture de pizza: ")
print(garnitures)
prix= 10+(len(garnitures)*2.5)
print("Le prix de la garniture :"+prix)
