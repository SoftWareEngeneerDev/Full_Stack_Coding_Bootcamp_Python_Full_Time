
#"#>>> print(disney_users_A)
#{"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}"""
#"""# Astuce : ne codez pas les chiffres en dur.""""""""""

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
#"""#Utilisez une boucle for pour recréer le 1er résultat."""
disney_users_A = {}
for i in range(0,5):
    for x in users:
        disney_users_A[users[i]]=i
print(disney_users_A)

#Utilisez une boucle for pour recréer le 2ème résultat. Astuce : ne codez pas les chiffres en dur.
disney_users_B ={}
for i in range(0,5):
    disney_users_B[i]= users[i]
print(disney_users_B)

disney_users_C = {}
users.sort()
for i in range(0,5):
    disney_users_C[users[i]]= i
print(disney_users_C)