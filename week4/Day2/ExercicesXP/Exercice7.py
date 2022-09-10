print("----------------------Exercice7------------------------------------------")
fruits_preferes = input("Entrer vos fruits préférées ici : ")
list1 =  fruits_preferes.split(" ")
print(list1)
favorite_fruits = input("Entrer vos fruits préférées ici : ")
if favorite_fruits in list1:
    print("Vous avez choisi votre fruits préféré")
else:
    print("Vous avez choisi un nouveau fruits")
