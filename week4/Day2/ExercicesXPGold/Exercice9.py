from random import *
unserNumber = int(input("entrer un nombre compris entre (1 et 10) :"))
#aleatoireNumber= range(1,9)
for i in range(0,10):
  n = randint(1,10)
print(n)
if unserNumber == n:
    print("You are the winner")
else:
    print("Meilleur chance pour la prochaine fois")