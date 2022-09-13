words = []
for i in range(0,7):
    word = input("Entrer un mot/(7 mots): ")
    words.append(word)
print(words)
letter = input("Entrer un caractère :")
for x in words:
    if letter in x:
        print(words.index(x))
    else:
        print("Désolé le caractère que vous avez entrer n'est pas le mot",x)
