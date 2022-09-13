#Créez une boucle qui va de 1500 à 2500 et imprime tous les multiples de 5 et 7.
numbers = []
for x in range(1500,2500):
    if x%5 == 0 and x%7==0:
        print(x)
    #numbers.append(x)
#print(numbers)