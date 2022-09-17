import random


def aleatoirNumber(nb,max=100):
    int(nb)
    print(type(nb))
    x = random.randint(1,100)
    print(type(x))
    if nb == x:
        print("Brava! vous avez pu deviner le nombre.")
    else:
        print("Désolé! le nombre fournie ne corresponde pas.")

    print("Vous avez fournie ",nb," "+"et le nombre aléatoire générer est ",x)

aleatoirNumber(14)