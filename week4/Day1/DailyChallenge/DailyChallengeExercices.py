from ntpath import join
import random
Caracter = input("Entrer une chaine de caractère :")
if len(Caracter) < 10:

    print("Chaine pas assez longue :",len(Caracter),"Carateres seulement")
else:
    print("La chaine trop longue :",len(Caracter),"Carateres")
print("---------------------------------------------------------------------------------")
print("Le premier caractère est :",Caracter[0])
print("Le dernier caractère est :",Caracter[-1])
print("---------------------------------------------------------------------------------")
chaine =""
for carac in Caracter:
    chaine += carac
    print(chaine)

print("---------------------------BONUS-----------------------------------")
new_list = list(Caracter)
print(new_list)
random.shuffle(new_list)
print(new_list)
new_sentence = "".join(new_list)
print(new_sentence)