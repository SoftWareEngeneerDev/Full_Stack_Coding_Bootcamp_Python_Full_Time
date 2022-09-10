my_name = "Jack"
hello = "Hello World"
my_age = 27

my_list = [my_name, hello, my_age]
print(my_list[2]) # The result gives us "Jack"
##-----------------------------------------------------------------------##
my_tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9)
print(my_tuple[-3])

name = "KAGAMBEGA"
print(name[0:5])
## Déclaration d'une liste en Python
colors = ["rouge","Jaune","Vert","Blanc","Noir"]
##ndexation des elements d'une liste
print(colors[2])
##Ajout d'un éléments dans la liste
colors.append("Rose")
print(colors)
##Suppression d'un éléments dans la liste
colors.remove("rouge")
print(colors)
##Suppression d'un éléments à partir de l'index
colors.pop(3)
print(colors)
len = len(colors)
print(len)
## insert() ## append() ## extend() ##