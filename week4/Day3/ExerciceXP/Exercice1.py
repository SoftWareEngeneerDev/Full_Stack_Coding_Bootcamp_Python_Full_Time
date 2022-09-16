"""
🌟 ------------------------------Exercice1-------------------|
: Convertir Des Listes En Dictionnaires
Instructions
Convertissez les deux listes suivantes en dictionnaires.
Astuce : Utilisez la méthode zip
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
Expected output:
{'Ten': 10, 'Twenty': 20, 'Thirty': 30}
--------------------------------------------------------------|
"""
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dict = {}
print("------------------Convertion du nombre liste et tuple---------------------")
for item in zip(keys, values):
    for x in item:
        dict.update(x[0])
    print(item)

print(dict)