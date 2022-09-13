numbers=[]
numbers.append(int(input("Entrer le 1er nombre :")))
numbers.append(int(input("Entrer le 2eme nombre :")))
numbers.append(int(input("Entrer le 3eme nombre :")))
max = numbers[0]
for i in range(0,3):
   if numbers[i] >= max:
       max = numbers[i]
print("Le le plus grand est :",max)