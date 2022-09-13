names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
yourName = input("Quel est votre nom: ")
if yourName in names:
    print(names.index(yourName))